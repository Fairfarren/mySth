import React, { Component } from 'react';
import '../App.css';

export default class Dom2 extends Component {
    render () {
        
        return (
            <div>dom2.id = {this.props.match.params.id}</div>
        )
    }
}