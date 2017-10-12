import React, { Component } from 'react';

export default class Hello extends Component {
    state = {
        title: 'this is hello page'
    };
    render () {
        return (
            <div>qwe, {this.state.title}</div>
        )
    }
}