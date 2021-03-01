import React, {useEffect, useState, useMemo} from 'react';

import Button from '../../UI/Button/Button';
import Flashcard from '../../UI/Flashcard/Flashcard';

import './FlashcardsStudying.css';
import '../../../hoc/Layout/Layout.scss';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const FlashcardsStudying = props => {
	const [points, setPoints] = useState(0);
	const [cardNumber, setCardNumber] = useState(0);
	const [deckName, setDeckName] = useState('');

	//prep states at component's mounting

	useEffect(() => {
		let tempDeckName = props.location.search;
		tempDeckName = tempDeckName.slice(1);
		console.log(tempDeckName);
		setDeckName(tempDeckName);
	}, []);

	const nextCardHandler = point => {
		if (cardNumber === props.flashcardsDecks[deckName].length - 1) {
			console.log('last one');
			setPoints(points => points + point);
		} else if (cardNumber < props.flashcardsDecks[deckName].length - 1) {
			console.log(props.flashcardsDecks[deckName]);
			setCardNumber(cardNumber => cardNumber + 1);
			setPoints(points => points + point);
		} else {
			console.log('sth');
		}
	};

	return (
		<div className="FlashcardsStudying">
			<div className="LeftSide">
				<span className="Points">POINTS: {points}</span>
				<Button clicked={() => nextCardHandler(1)}>i knew</Button>
				<Button clicked={() => nextCardHandler(0)}>repeat later</Button>
				<Link to="/flashcards-edit-decks">
					<Button>edit decks</Button>
				</Link>
			</div>
			<div className="RightSide">
				{deckName !== '' && props.flashcardsDecks[deckName].length !== 0 ? (
					<Flashcard
						front={props.flashcardsDecks[deckName][cardNumber].front}
						back={props.flashcardsDecks[deckName][cardNumber].back}
					/>
				) : (
					<Flashcard front={''} back={''} />
				)}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		flashcardsDecks: state.flashcardsDecks,
	};
};

export default connect(mapStateToProps)(FlashcardsStudying);
