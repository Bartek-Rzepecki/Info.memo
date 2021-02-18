import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/flashcards';
import Flashcard from '../../components/UI/Flashcard/Flashcard';
import FlashcardControl from './FlashcardControl/FlashcardControl';
import DeckItem from './DeckItem/DeckItem';
import './FlashcardsEditDecks.scss';
import '../../hoc/Layout/Layout.scss';

const FlashcardsEditDecks = props => {
	const [deckInputValue, setDeckInputValue] = useState('');
	const [activeDeckName, setActiveDeckName] = useState('');

	//This array is used FOR UI representation of decks,
	//The logical content of decks is stored in the Redux store
	const [decksArray, setDecksArray] = useState([]);

	//update State, and dependence UI when new Active Deck is chosen
	useEffect(() => {
		if (activeDeckName != '') {
			let tempDecksArray = [...decksArray];
			tempDecksArray = tempDecksArray.map(deck => ({
				name: deck.name,
				isActive: false,
			}));
			let activeDeckIndex = tempDecksArray.findIndex(
				tempDeck => tempDeck.name === activeDeckName
			);
			tempDecksArray[activeDeckIndex] = {name: activeDeckName, isActive: true};
			setDecksArray(tempDecksArray);
		}
	}, [activeDeckName]);

	const addDeckHelper = () => {
		let tempDecksArray = [...decksArray];
		props.onAddDeck(deckInputValue);
		tempDecksArray.push({name: deckInputValue, isActive: false});
		setDecksArray(tempDecksArray);
	};

	const AddNewDeckHandler = event => {
		if (deckInputValue.trim() != '' && !props.flashcardsDecks[deckInputValue]) {
			if (event.key && event.key === 'Enter') {
				addDeckHelper();
			} else if (!event.key) {
				addDeckHelper();
			}
		}
	};

	const DeleteDeckHandler = deckName => {
		if (props.flashcardsDecks[deckName]) {
			let tempDecksArray = [...decksArray];
			let deckToDeleteIndex = tempDecksArray.findIndex(
				tempDeck => tempDeck.name === deckName
			);
			tempDecksArray.splice(deckToDeleteIndex, 1);
			setDecksArray(tempDecksArray);
			props.onDeleteDeck(deckName);
			if (deckName === activeDeckName) {
				setActiveDeckName('');
			}
		}
	};

	let decks = decksArray.map(deck => {
		return (
			<DeckItem
				key={deck.name}
				deck={deck}
				setActiveDeckName={() => setActiveDeckName(deck.name)}
				deleteDeck={() => DeleteDeckHandler(deck.name)}
			/>
		);
	});

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
							value={deckInputValue}
							onChange={e => setDeckInputValue(e.target.value)}
							onKeyPress={event => AddNewDeckHandler(event)}
						/>
					</label>
				</div>
			</div>
			<div className="RightSide">
				<Flashcard front={activeDeckName} back={activeDeckName} />
				<span className="FlashcardControls">
					<FlashcardControl>
						<i className="fas fa-angle-left"></i>
					</FlashcardControl>
					<FlashcardControl>
						<i className="fas fa-angle-right"></i>
					</FlashcardControl>
					<FlashcardControl>
						<i className="fas fa-plus"></i>
					</FlashcardControl>
					<FlashcardControl>
						<i className="fas fa-pen"></i>
					</FlashcardControl>
					<FlashcardControl>
						<i className="far fa-trash-alt"></i>
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
		onDeleteDeck: deckName => dispatch(actions.deleteDeck(deckName)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(FlashcardsEditDecks);
