import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';
export const addDeckStart = deckName => {
	return {
		type: actionTypes.ADD_DECK,
		newDeck: deckName,
	};
};

export const addDeck = deckName => {
	return dispatch => {
		dispatch(addDeckStart(deckName));
	};
};
