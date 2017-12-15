import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom'
//懒加载组件
import Bundle from '../../bundle'

//ui框架
import {
    Table,
    Button,
    Select,
    Modal
} from 'antd';
import { setTimeout } from 'core-js/library/web/timers';
const Option = Select.Option;

const AddClass = (props) => (
    <Bundle load={() => import('../../components/addClass')}>
        {(Demo) => <Demo {...props} />}
    </Bundle>
)
const ChangeClass = (props) => (
    <Bundle load={() => import('../../components/changeClass')}>
        {(Demo) => <Demo {...props} />}
    </Bundle>
)

class Class extends Component {
    state = {
        //表格格式
        columns: [{
            title: '课程名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '课程图',
            key: 'img',
            render: (text, record) => (
                <img src={text.img} alt="课程图" />
            )
        }, {
            title: '机构',
            dataIndex: 'publisher',
            key: 'publisher',
            render: (text, record) => {
                if (record['publisher']) {
                    return record['publisher']
                } else {
                    return '此课程没有加入机构'
                }
            }
        }, {
            title: '讲师',
            dataIndex: 'lecturer',
            key: 'lecturer'
        }, {
            title: '学习人数',
            dataIndex: 'count',
            key: 'count'
        }, {
            title: '授课时间',
            dataIndex: 'time',
            key: 'time'
        }, {
            title: '大类',
            dataIndex: 'category',
            key: 'category'
        }, {
            title: '小类',
            dataIndex: 'small',
            key: 'small'
        }, {
            title: '价格(元)',
            dataIndex: 'price',
            key: 'price'
        }, {
            title: '编辑',
            key: 'change',
            render: (text, record) => (
                <a onClick={() => {
                    this.changeClass(record['id']);
                }} type="primary">编辑</a>
            )
        }, {
            title: '课时数',
            dataIndex: 'lesson_count',
            key: 'lesson_count'
        }, {
            title: '查看章节',
            dataIndex: 'lookClassList',
            key: 'lookClassList',
            render: (text, record) => (
                <NavLink to={`/class/chapter/${record['id']}/${record['name']}`} type="primary">查看章节</NavLink>
            )
        }, {
            title: '是否推荐',
            key: 'is_banner',
            render: (text, record) => {
                if (record['is_banner']) {
                    return '已推荐'
                } else {
                    return '没有推荐'
                }
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                if (record['is_banner']) {
                    return (
                        <div>
                            <Button>取消推荐</Button>
                            <Button type="danger">删除</Button>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <Button type="primary">推荐</Button>
                            <Button type="danger">删除</Button>
                        </div>
                    )
                }

            }
        }],
        data: [],//表格数据
        page: 1,
        total: 10,
        //下拉菜单
        downList: {
            categoryList: [{
                id: '-1',
                name: '请选择大类'
            }],
            smallList: [{
                id: '-1',
                name: '请选择小类'
            }],
            smallText: '',
            categoryIndex: '-1',
            smallIndex: '-1'
        },
        //列表等待
        tableListLoading: true,
        //添加课程弹窗
        addClassVisible: false,
        changeClassVisible: false,
        classId: 0
    }
    componentDidMount() {
        let obj = this.state.downList;
        obj.smallText = this.state.downList.smallList[0].name
        this.setState({
            downList: obj
        })
        this.getCategoryAjax();
        this.getClassListOnClassAjax();
    }
    //获取课程列表
    getClassListOnClassAjax = (haveSmallId) => {
        //   /admin/course/page/1?small_id=1
        const { axios } = this.props;
        let url = '';
        if (haveSmallId) {
            if (this.state.downList.smallIndex < 0 && this.state.downList.categoryIndex) {
                Modal.warning({
                    title: '警告',
                    content: '请选择小类',
                });
                return;
            }
            url = `/admin/course/page/${this.state.page}?small_id=${this.state.downList.smallIndex}`
        } else {
            url = `/admin/course/page/${this.state.page}`
        }
        this.setState({
            tableListLoading: true
        })
        axios({
            url: url,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                this.setState({
                    data: [],
                })
                this.setState({
                    data: res.data.course_list,
                    total: res.data.page_info.count,
                    tableListLoading: false
                })
            } else {
                Modal.warning({
                    title: '警告',
                    content: res.msg,
                });
            }
        }).catch((error) => {
            console.log(error);
            Modal.error({
                title: '出错了！',
                content: '网络连接错误或者服务器无响应',
            });
        })
    }
    //编辑
    changeClass = (id) => {
        this.setState({
            changeClassVisible: true,
            classId: id
        })
    }
    //查看分课时
    lookClassList = (e) => {

    }
    //下拉菜单方法
    changeCategory = (value) => {
        let obj = this.state.downList;
        obj.categoryIndex = value;
        this.setState({
            downList: obj
        })
        this.getSmallAjax(value);
    }
    changeSmall = (value) => {
        const optionValue = JSON.parse(value);
        let obj = this.state.downList;
        obj.smallIndex = optionValue.id;
        obj.smallText = optionValue.name;
        this.setState({
            downList: obj
        })
    }
    //end下来菜单方法
    //获取大类
    getCategoryAjax = () => {
        const { axios } = this.props;
        axios({
            url: '/admin/category',
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                let arr = this.state.downList;
                arr.categoryList = res.data.category_list;
                arr.categoryList = [];
                res.data.category_list.map((value, index) => {
                    arr.categoryList.push({
                        id: value.id + '',
                        name: value.name
                    })
                    return value;
                })
                setTimeout(() => {
                    this.setState({
                        downList: arr
                    })
                }, 10)
            } else {
                Modal.warning({
                    title: '警告',
                    content: res.msg,
                });
            }
        }).catch((error) => {
            console.log(error);
            Modal.error({
                title: '出错了！',
                content: '网络连接错误或者服务器无响应',
            });
        })
    }
    //获取小类
    getSmallAjax = (index) => {
        const { axios } = this.props;
        axios({
            url: `/admin/category/${index}/small`,
            method: 'get',
            headers: {
                'Authorization': sessionStorage.token,
            }
        }).then((res) => {
            if (res.data.status_code === 200) {
                let arr = this.state.downList;
                arr.smallList = [];
                if (res.data.small_list.length > 0) {
                    res.data.small_list.map((value, index) => {
                        arr.smallList.push({
                            id: value.id + '',
                            name: value.name
                        })
                        return value;
                    })
                } else {
                    arr.smallList = [{
                        id: '-1',
                        name: '没有数据'
                    }]
                }
                arr.smallText = this.state.downList.smallList[0].name;
                arr.smallIndex = arr.smallList[0].id;
                setTimeout(() => {
                    this.setState({
                        downList: arr
                    })
                }, 10)
            } else {
                Modal.warning({
                    title: '警告',
                    content: res.msg,
                });
            }
        }).catch((error) => {
            console.log(error);
            Modal.error({
                title: '出错了！',
                content: '网络连接错误或者服务器无响应',
            });
        })
    }
    render() {
        const provinceOptions = this.state.downList.categoryList.map((category, index) => {
            return (
                <Option key={index} value={category.id}>{category.name}</Option>
            )
        })
        // console.log(provinceOptions);
        const smallOptions = this.state.downList.smallList.map((small, index) => {
            const value = JSON.stringify(small);
            return (
                <Option key={index} value={value}>{small.name}</Option>
            )
        })
        // const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
        return (
            <div className="contentBox">
                <div className="contentHeader">
                    课程管理
                </div>
                <div className="contentHeaderButton">
                    <Button onClick={() => {
                        this.setState({
                            addClassVisible: true
                        })
                    }}>
                        添加课程
                    </Button>
                </div>
                <div className="contentHeaderButton">
                    <Select defaultValue={this.state.downList.categoryList[0].id} onChange={this.changeCategory} style={{ marginRight: '10px' }}>
                        {provinceOptions}
                    </Select>
                    <Select value={this.state.downList.smallText} onChange={this.changeSmall} style={{ marginRight: '10px' }}>
                        {smallOptions}
                    </Select>
                    <Button type="primary" onClick={() => {
                        this.setState({
                            page: 1
                        })
                        this.getClassListOnClassAjax('haveSmallId')
                    }}>
                        按类查看
                    </Button>
                </div>
                <div className="contentContent" id="classListTable">
                    {/* 表格 */}
                    <Table
                        loading={this.state.tableListLoading}
                        rowKey="id"
                        columns={this.state.columns}
                        dataSource={this.state.data}
                        pagination={{
                            defaultCurrent: this.state.page,//当前页码
                            defaultPageSize: 10,//当前条数
                            total: this.state.total//总页数
                        }}
                        onChange={(tableList) => {
                            this.setState({
                                page: tableList.current
                            })
                            setTimeout(() => {
                                this.getClassListOnClassAjax()
                            }, 10)
                        }} />
                </div>
                {/* 弹窗 */}
                {
                    this.state.addClassVisible &&
                    <AddClass
                        category={this.state.downList.categoryList}
                        axios={this.props.axios}
                        toggle={this.state.addClassVisible}
                        closeModal={() => {
                            setTimeout(() => {
                                this.setState({
                                    addClassVisible: false
                                })
                            }, 300)
                        }}
                    />
                }
                {
                    this.state.changeClassVisible &&
                    <ChangeClass
                        category={this.state.downList.categoryList}
                        axios={this.props.axios}
                        toggle={this.state.changeClassVisible}
                        classId={this.state.classId}
                        closeModal={() => {
                            this.setState({
                                changeClassVisible: false
                            })
                        }}
                        upDataList={this.getClassListOnClassAjax}
                    />
                }

            </div>
        )
    }
}

export default withRouter(Class);