import React, { Component } from 'react';
import '../App.css';

export default class Childre1 extends Component {
	
	componentDidMount () {

	}
	up = () => {
		let number = this.props.title;
		number++;
		this.props.onUp(number);
	}
	down = () => {
		let number = this.props.title;
		number--;
		this.props.onDown(number);
	}
	render = () => (
		<div>
			<p>{this.props.title}</p>
			<div>
				<button onClick={this.up}>++</button>
				<button onClick={this.down}>--</button>
			</div>
		</div>
	)
}