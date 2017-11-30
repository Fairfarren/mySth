import React, { Component } from 'react';
//mobx
import {observer} from 'mobx-react';

import Demo1 from './components/demo1'
import Demo2 from './components/demo2'

@observer
class App extends Component {
	render() {
		return (
			<div>
				<p>
					{this.props.store.state.number}
				</p>
				<Demo1 store={this.props.store}/>
				<Demo2 store={this.props.store}/>
			</div>
		);
	}
}

export default App;
