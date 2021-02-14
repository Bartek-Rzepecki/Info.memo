import React from 'react';
import './EmptyFlashcard.css';
const EmptyFlashcard = ({whiteText, greyText}) => (
	<div className="EmptyFlashcard">
		<span className="GreyText">{greyText}</span>
		<span className="WhiteText">{whiteText}</span>
	</div>
);

export default EmptyFlashcard;
