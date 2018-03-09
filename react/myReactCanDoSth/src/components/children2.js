import React, { Component } from 'react';
import '../App.css';

export default class Childre2 extends Component {
	childrenInputChange = (e) => {
		let value = e.target.value;
		this.props.onInputChange(value)
	}
	render = () => (
		<div>
			<input value={this.props.title} onChange={this.childrenInputChange}/>
		</div>
	)
}