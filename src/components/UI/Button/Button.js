import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
	console.log('Button RUNNING');
	return (
		<button
			type={props.type || 'button'}
			className={`${classes.button} ${props.className}`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

/**
 * Nothing in the props is changed by the parent component, so it makes
 * sense to use React.memo() to prevent this component from re-running
 * when the parent state changes.
 *
 * BUT THIS DOESN'T WORK because of the onClick attribute contains a FUNCTION.
 *
 * In Javascript, FUNCTIONS ARE OBJECTS. OBJECTS and ARRAYS are REFERENCE TYPE
 * data in Javascript.
 *
 * React.memo() compares previous and new props:
 * props.value === props.prev.value
 *
 * This works well for PRIMITIVE DATA types such as strings, Booleans and
 * integers as the size of primitive types is known in advance and can be stored
 * in STACK memory.
 *
 * However, objects and arrays can be any size so are stored in HEAP memory and
 * their variable names in stack simply point to their location in heap memory.
 *
 * Each time the parent component is re-run after a state change the
 * toggleParaHandler is recreated as a different object pointing at a different
 * location in heap memory, which means:
 * props.function !== props.prev.function
 *
 * Therefore, this props change causes the button component to re-run even though
 * React.memo() has been added and no "real" changes have been made to the buttons
 * props.
 *
 * To work around this behaviour you can use the useCallback() hook. See App.js for
 * details.
 */
export default React.memo(Button);
