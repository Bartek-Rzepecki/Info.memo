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
	flashcardsDecks: {},
};

const addDeck = (state, action) => {
	const newFlashcardDecks = {...state.flashcardsDecks, [action.newDeck]: []};
	return {...state, flashcardsDecks: newFlashcardDecks};
};

const flashcardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_DECK:
			return addDeck(state, action);
		default:
			return state;
	}
};
export default flashcardsReducer;
