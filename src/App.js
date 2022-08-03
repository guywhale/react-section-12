import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import './App.css';

function App() {
	const [showPara, setShowPara] = useState(false);
	/**
	 * This will appear every time the state changes, because state changes
	 * trigger a re-run of the component function.
	 *
	 * The whole component is only re-run in the Virtual DOM and the compared
	 * to the real DOM. Only differences between the Virtual DOM and the real
	 * DOM are updated in the real DOM, as updating the DOM is an expensive
	 * function.
	 */
	console.log('APP RUNNING');

	/**
	 * The useCallback() hook allows us to store functions across different
	 * components. This means it will not be re-created every time this component
	 * is re-run after a state, context or props change. React will store the
	 * function object once and re-use that function.
	 *
	 * This is useful when you want to use React.memo() on child components
	 * with a function as a prop attribute. Because when React.memo() compares
	 * prop.function with prop.prev.function, it will find the same functio object.
	 *
	 * See Button.js for details.
	 */
	const toggleParaHandler = useCallback(() => {
		setShowPara((prevParaState) => !prevParaState);
	}, []);

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={false} />
			<Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
		</div>
	);
}

export default App;
