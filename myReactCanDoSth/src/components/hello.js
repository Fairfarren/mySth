import React, { Component } from 'react';
import '../App.css';

export default class Hello extends Component {
    render = () => (
        <div>
            <h1>this is hello model</h1>
            <h2>hello，{this.props.title}</h2>
            <ol>
                {
                    React.Children.map( this.props.children, (child) => (
                        <li>{child}</li>
                    ))
                }
            </ol>
        </div>
    )
}