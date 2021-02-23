import React from 'react';
import './FlashcardControl.css';
const FlashcardControl = ({children, clicked}) => (
	<button className="FlashcardControl" onClick={clicked}>
		{children}
	</button>
);

export default FlashcardControl;
