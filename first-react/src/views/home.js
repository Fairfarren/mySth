import React, { Component } from 'react';

export default class Home extends Component{
    state = {
        title: `this is home`
    };
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    };
    render () {
        return (
            <div>
                <p>hello, {this.props.title}</p>
                <p>{this.state.title}</p>
            </div>
        )
    }
}