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
		a: [{front: 'ali', back: 'gator'}],
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
	console.log('pushing is working');
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
		default:
			return state;
	}
};
export default flashcardsReducer;
