import React, { useState, useEffect } from 'react';
import './App.css';

function FunctionalClock(props) {
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
			<h1>Functional Component</h1>
			<h2>Counter: {counter}</h2>
			<h3>The Current time is: {clockData.toLocaleTimeString()}</h3>
		</div>
	);
}

export default FunctionalClock;
