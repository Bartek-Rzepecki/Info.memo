import React from 'react';
import classes from './Button.module.css';

const button = ({ButtonType, children, clicked}) => (
	<button onClick={clicked} className={[classes.Button, classes[ButtonType]].join(' ')}>
		{children}
	</button>
);

export default button;
