import React from 'react';
import './Flashcard.css';
const Flashcard = ({front, back}) => (
	<div className="Scene">
		<div className="Flashcard">
			<div className="FlashcardFront">{front}</div>
			<div className="FlashcardBack">{back}</div>
		</div>
	</div>
);

export default Flashcard;
