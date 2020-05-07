import React from 'react';
import SearchFilter from '../src/components/FilterSearch';
import RangeInput from '../src/components/RangeInput';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="header">
				<h1>Richard's Utility Components</h1>
			</div>
			<div className="container">
				<SearchFilter />
				<RangeInput />
			</div>
		</div>
	);
}

export default App;
