import React from 'react';
import MyParagraph from './MyParagraph';

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
	return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

/**
 * This will optimise functional components.
 *
 * React.memo() tells React to compare the previous props with the new props
 * when the parent component changes.
 *
 * If there are no changes to the props after the parent component has re -run,
 * the component (and all its descendants) will not re-run, saving resources.
 *
 * BUT REMEMBER there is a performance cost to comparing previous and new props.
 * You have to evaluate whether it is worth it.
 *
 * WHEN TO USE
 * If you have a lot of descendant components in a large component tree and you
 * don't want them to be re-evaluated every time, using React.memo() on a high
 * level component to shut down a branch of components is a good idea.
 *
 * WHEN NOT TO USE
 * If you have a component which is going to change frequently, then not worth it
 * because you are wasting resources on first, comparing props, then re-running
 * component. This is more costly than simply re-running component function.
 */
export default React.memo(DemoOutput);
