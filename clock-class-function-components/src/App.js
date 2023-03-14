import React from 'react';
import './App.css';
import FunctionalClock from './FunctionalClock.js';
import ClassClock from './ClassClock.js';

function App() {
	return (
		<div className='App'>
			<FunctionalClock date={new Date()} />
			<ClassClock date={new Date()} />
		</div>
	);
}

export default App;
