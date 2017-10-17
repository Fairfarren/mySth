import React, { Component } from 'react';
import '../App.css';

export default class Dom3 extends Component {
    render () {
        
        return (
            <div>dom3.id = {this.props.match.params.id}</div>
        )
    }
}