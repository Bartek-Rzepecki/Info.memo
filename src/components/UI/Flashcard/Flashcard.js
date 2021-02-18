import React, {useEffect} from 'react';
import {useState} from 'react';
import './Flashcard.css';
const Flashcard = ({front, back}) => {
	const [isCardFlipped, setIsCardFlipped] = useState(false);

	const [flashcardClassNames, setFlashcardClassNames] = useState('Flashcard');
	useEffect(() => {
		if (isCardFlipped) {
			console.log('clicked');
			setFlashcardClassNames('Flashcard Flipped');
		} else {
			setFlashcardClassNames('Flashcard');
		}
	}, [isCardFlipped]);

	return (
		<div
			className="Scene"
			onClick={() => {
				console.log('onlick');
				console.log(isCardFlipped);
				setIsCardFlipped(!isCardFlipped);
			}}
		>
			<div className={flashcardClassNames}>
				<div className="FlashcardFront">
					<span className="FlashcardText">{front}</span>
				</div>
				<div className="FlashcardBack">
					<span className="FlashcardText">{back}</span>
				</div>
			</div>
		</div>
	);
};

export default Flashcard;
