import {act} from 'react-dom/test-utils';
import {connect} from 'react-redux';
import * as actionTypes from '../actions/actionTypes';

/*
const initialState = {
	flashcardsDecks: {
		nameOfFirstDeck: [{card1}, {card2}],
		nameOfSecondDeck: [{card3}, {card4}, {card5}]
	},
};
*/

const initialState = {
	flashcardsDecks: {
		animals: [
			{front: 'gato', back: 'cat'},
			{front: 'perro', back: 'dog'},
		],
		verbs: [
			{front: 'ser', back: 'to be'},
			{front: 'comer', back: 'eat'},
		],
	},
};

const addDeck = (state, action) => {
	const newFlashcardDecks = {...state.flashcardsDecks, [action.newDeck]: []};
	return {...state, flashcardsDecks: newFlashcardDecks};
};

const deleteDeck = (state, action) => {
	let newFlashcardDecks = {...state.flashcardsDecks};
	delete newFlashcardDecks[action.deckToDelete];
	return {...state, flashcardsDecks: newFlashcardDecks};
};

const pushCards = (state, action) => {
	let newFlashcardDecks = {...state.flashcardsDecks};
	let deckToChange = newFlashcardDecks[action.deckToModify];
	deckToChange.push(...action.cardsArray);
	return {
		...state,
		flashcardsDecks: newFlashcardDecks,
	};
};

const deleteCard = (state, action) => {
	let newFlashcardDecks = {...state.flashcardsDecks};
	let deckToChange = newFlashcardDecks[action.deckToModify];
	deckToChange.splice(action.cardToDelete, 1);

	return {
		...state,
		flashcardsDecks: newFlashcardDecks,
	};
};

const flashcardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_DECK:
			return addDeck(state, action);
		case actionTypes.DELETE_DECK:
			return deleteDeck(state, action);
		case actionTypes.PUSH_CARDS:
			return pushCards(state, action);
		case actionTypes.DELETE_CARD:
			return deleteCard(state, action);
		default:
			return state;
	}
};
export default flashcardsReducer;
