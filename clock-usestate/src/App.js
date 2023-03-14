import React from 'react';
import './App.css';
import Clock from './Clock.js';

function App() {
	return (
		<div className='App'>
			<Clock date={new Date()} />
		</div>
	);
}

export default App;
