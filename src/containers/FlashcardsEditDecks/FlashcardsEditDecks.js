import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/flashcards';
import Flashcard from '../../components/UI/Flashcard/Flashcard';
import FlashcardControl from './FlashcardControl/FlashcardControl';
import './FlashcardsEditDecks.scss';
import '../../hoc/Layout/Layout.scss';

const FlashcardsEditDecks = props => {
	const [deckName, setDeckName] = useState('');

	const AddNewDeckHandler = event => {
		if (deckName.trim() != '' && !props.flashcardsDecks[deckName]) {
			if (event.key && event.key === 'Enter') {
				props.onAddDeck(deckName);
			} else if (!event.key) {
				props.onAddDeck(deckName);
			}
		}
	};
	let decksArray = [];
	for (let deck in props.flashcardsDecks) {
		decksArray.push({
			name: [deck],
		});
	}
	let decks = decksArray.map(deck => (
		<div className="DeckItem" key={deck.name}>
			{deck.name}
		</div>
	));
	return (
		<div className="FlashcardsEditDecks">
			<div className="LeftSide">
				<div className="Decks">
					<div className="YourDecks">Your Decks: </div>
					<div className="DeckList">
						{props.flashcardsDecks.length !== 0 ? decks : null}
					</div>
					<label className="AddDeckLabel">
						<span className="AddDeckText" onClick={event => AddNewDeckHandler(event)}>
							Add a deck
						</span>
						<input
							className="AddDeckInput"
							type="text"
							value={deckName}
							onChange={e => setDeckName(e.target.value)}
							onKeyPress={event => AddNewDeckHandler(event)}
						/>
					</label>
				</div>
			</div>
			<div className="RightSide">
				<Flashcard front="gato" back="cat" />
				<span className="FlashcardControls">
					<FlashcardControl>
						<i className="fas fa-angle-left"></i>
					</FlashcardControl>
					<FlashcardControl>
						<i className="fas fa-angle-right"></i>
					</FlashcardControl>
					<FlashcardControl>
						<i className="far fa-trash-alt"></i>
					</FlashcardControl>
					<FlashcardControl>
						<i className="fas fa-retweet"></i>
					</FlashcardControl>
					<FlashcardControl>
						<i className="fas fa-pen"></i>
					</FlashcardControl>
				</span>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		flashcardsDecks: state.flashcardsReducer.flashcardsDecks,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		onAddDeck: deckName => dispatch(actions.addDeck(deckName)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(FlashcardsEditDecks);
