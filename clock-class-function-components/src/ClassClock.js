import React, { Component } from 'react';

class ClassClock extends Component {
	//
	constructor(props) {
		super(props);
		this.state = { clockData: props.date, counter: 0 };
	}

	tick() {
		this.setState({ clockData: new Date(), counter: this.state.counter + 1 });
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		let body = (
			<div>
				<h1>Class Component</h1>
				<h2>Counter: {this.state.counter && this.state.counter}</h2>
				<h3>
					The Current time is:{' '}
					{this.state.clockData && this.state.clockData.toLocaleTimeString()}
				</h3>
			</div>
		);

		return body;
	}
}

export default ClassClock;
