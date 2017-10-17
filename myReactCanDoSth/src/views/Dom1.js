import React, { Component } from 'react';
import '../App.css';

export default class Dom1 extends Component {
    render () {
        
        return (
            <div>dom1.id = {this.props.match.params.id}</div>
        )
    }
}