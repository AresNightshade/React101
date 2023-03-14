import React, { useState, useEffect } from 'react';
import './App.css';

function Clock(props) {
	//
	const [clockData, setClock] = useState(props.date);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const tick = () => {
			setClock(new Date());
			setCounter((counter) => counter + 1);
		};

		const timerID = setInterval(() => tick(), 1000);

		return () => {
			// Cleanup work goes in here
			clearInterval(timerID);
		};
	}, []);

	return (
		<div>
			<h1>Counter: {counter}</h1>
			<h2>The Current time is: {clockData.toLocaleTimeString()}</h2>
		</div>
	);
}

export default Clock;
