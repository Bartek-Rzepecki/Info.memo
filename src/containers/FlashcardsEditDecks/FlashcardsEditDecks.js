import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/flashcards';
import Flashcard from '../../components/UI/Flashcard/Flashcard';
import FlashcardControl from './FlashcardControl/FlashcardControl';
import './FlashcardsEditDecks.scss';
import '../../hoc/Layout/Layout.scss';

const FlashcardsEditDecks = props => {
	const [deckInputValue, setDeckInputValue] = useState('');
	const [newDeckName, setNewDeckName] = useState('');
	const [activeDeckName, setActiveDeckName] = useState('');
	const [decksArray, setDecksArray] = useState([]);

	useEffect(() => {
		if (newDeckName !== '') {
			console.log('UseEffect new deck name');
			console.log('TempDecksArr:');
			let tempDecksArray = [...decksArray];
			console.log(tempDecksArray);
			tempDecksArray.push({name: newDeckName, isActive: false});
			setDecksArray(tempDecksArray);
		}
	}, [newDeckName]);

	useEffect(() => {
		if (activeDeckName != '') {
			console.log('UseEffect activedeckname');
			console.log(activeDeckName);
			console.log('Temp decks arr');
			let tempDecksArray = [...decksArray];
			console.log(tempDecksArray);
			tempDecksArray = tempDecksArray.map(deck => ({
				name: deck.name,
				isActive: false,
			}));
			let activeDeckIndex = tempDecksArray.findIndex(
				tempDeck => tempDeck.name === activeDeckName
			);
			console.log(activeDeckIndex);
			tempDecksArray[activeDeckIndex] = {name: activeDeckName, isActive: true};
			console.log('Found active deck index');
			console.log('Modified');
			console.log(tempDecksArray);
			setDecksArray(tempDecksArray);
		}
	}, [activeDeckName]);

	const AddNewDeckHandler = event => {
		if (deckInputValue.trim() != '' && !props.flashcardsDecks[deckInputValue]) {
			if (event.key && event.key === 'Enter') {
				setNewDeckName(deckInputValue);
				props.onAddDeck(deckInputValue);
			} else if (!event.key) {
				setNewDeckName(deckInputValue);
				props.onAddDeck(deckInputValue);
			}
		}
	};

	let tempDecksArray = [];
	for (let deck in props.flashcardsDecks) {
		tempDecksArray.push({name: `${deck}`, isActive: true});
	}

	let ChoseDeckItemClasses = ['ChoseDeckItem'];

	let decks = decksArray.map(deck => {
		if (deck.isActive) {
			ChoseDeckItemClasses = ['ChoseDeckItem', 'ChoseDeckItemActive'];
		} else {
			ChoseDeckItemClasses = ['ChoseDeckItem'];
		}
		return (
			<div className="DeckItem" key={deck.name}>
				<span>{deck.name}</span>
				<span className="DeckItemsControl">
					<div
						className={ChoseDeckItemClasses.join(' ')}
						onClick={() => {
							setActiveDeckName(deck.name);
						}}
					>
						<i className="fas fa-play"></i>
					</div>
					<div className="DeleteDeckItem">
						<i className="far fa-trash-alt"></i>
					</div>
				</span>
			</div>
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
				<Flashcard front={activeDeckName} back="" />
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
