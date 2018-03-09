import React, { Component } from 'react';
import '../App.css';

const arr = [
    <p key="1">hello</p>,
    <div key="2">world</div>
];
export default class World extends Component {
    state = {
        value: ''
    }
    changeName = () => {
        const value = this.refs.name.value || `no name`;
        alert( value);
    };
    haveName = () => {
        const text = this.state.value || 'no name';
        return text
    };
    inputOnChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>this is world model</h1>
                { arr }
                <div>
                    <input ref="name" value={this.state.value} onChange={this.inputOnChange}  placeholder="your name?"/>
                    <input onClick={this.changeName} type="button" value="say name"/>
                    <p>{this.haveName()}</p>
                    <input type="button" onClick={ ()=>{ this.setState({value: ''}) }} value="clear name"/>
                </div>
            </div>
        )
    }
}