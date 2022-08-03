import React from 'react';

const DemoOutput = (props) => {
	/**
	 * This will appear when the props changes, because props changes
	 * trigger a re-run of the component function.
	 *
	 * In this case, a change in the parent component's state will change
	 * the props, causing it to re-run.
	 *
	 * NOTE: changes to the parent state will lead the child component function
	 * to run again, even if no changes to the props are made. Therefore this
	 * will not necessarily lead to changes to the real DOM.
	 *
	 * The whole component is only re-run in the Virtual DOM and the compared
	 * to the real DOM. Only differences between the Virtual DOM and the real
	 * DOM are updated in the real DOM, as updating the DOM is an expensive
	 * function.
	 */
	console.log('DemoOutput Running');
	return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default DemoOutput;
