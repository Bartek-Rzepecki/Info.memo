import React from 'react';
import './Flashcard.css';
const Flashcard = ({front, back}) => (
	<div className="Scene">
		<div className="Flashcard">
			<div className="FlashcardFront">
				<span className="FlashcardText">{front}</span>
			</div>
			<div className="FlashcardBack">
				<span className="FlashcardText">{back}</span>
			</div>
		</div>
	</div>
);

export default Flashcard;
