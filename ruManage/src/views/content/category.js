import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

//ui框架
import {
    Button,
} from 'antd';

class Category extends Component {
    render() {
        return (
            <div className="contentBox">
                <div className="contentHeader">
                    类别管理
                </div>
                <div className="contentContent">
                    <Button>
                        123
                    </Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Category);