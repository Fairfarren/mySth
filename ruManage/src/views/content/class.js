import React, { Component } from 'react'

//ui框架
import {
    Table,
    Button
} from 'antd';


class Class extends Component {
    state = {
        //表格内容
        columns: [{
            title: '课程名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '课程图',
            dataIndex: 'image',
            key: 'image',
        }, {
            title: '机构',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '讲师',
            dataIndex: 'teach',
            key: 'teach'
        }, {
            title: '学习人数',
            dataIndex: 'person',
            key: 'person'
        }, {
            title: '授课时间',
            dataIndex: 'time',
            key: 'time'
        }, {
            title: '类别',
            dataIndex: 'class',
            key: 'class'
        }, {
            title: '价格',
            dataIndex: 'money',
            key: 'money'
        }, {
            title: '编辑',
            key: 'change',
            render: (text, record) => (
                <Button onClick={this.changeClass} type="primary">编辑</Button>
            )
        }, {
            title: '课时数',
            dataIndex: 'classNumber',
            key: 'classNumber'
        }, {
            title: '查看分课时',
            dataIndex: 'lookClassList',
            key: 'lookClassList',
            render: (text, record) => (
                <Button type="primary">查看分课时</Button>
            )
        }, {
            title: '推荐状态',
            dataIndex: 'status',
            key: 'status'
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button type="primary">推荐</Button>
                    <Button>取消推荐</Button>
                    <Button type="danger">删除</Button>
                </div>
            )
        }],
        data: [],
        page: 1
    }
    componentDidMount() {
        let arr = [];
        for(let i=0; i< 50; i++) {
            arr.push({
                name: `课程${i}`,
                image: `没有图片${i}`,
                address: `没有结构${i}`,
                teach: `没有${i}`,
                person: i,
                time: `没有时间${i}`,
                class: `没有类别${i}`,
                money: `不要钱${i}`,
                classNumber: `没有课程数${i}`,
                lookClassList: `没有课时${i}`,
                status: `没有状态${i}`,
                key: i,
            })
        }
        this.setState({
            data: arr
        })
    }
    //编辑
    changeClass = (e) => {
        
    }
    //查看分课时
    lookClassList = (e) => {

    }
    render() {
        // console.log(this.props);
        return (
            <div className="contentBox">
                <div className="contentHeader">
                    课程管理
                </div>
                <div className="contentContent">
                    {/* 表格 */}
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.data} 
                        pagination={{
                            defaultCurrent: this.state.page,
                            total: 40,
                            defaultPageSize: 1
                        }}
                        onChange={ (tableList) => {
                            this.setState({
                                page: tableList.current
                            })
                        }}/>
                </div>
            </div>
        )
    }
}

export default Class;