import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

export const addDeck = deckName => {
	return {
		type: actionTypes.ADD_DECK,
		newDeck: deckName,
	};
};

export const deleteDeck = deckName => {
	return {
		type: actionTypes.DELETE_DECK,
		deckToDelete: deckName,
	};
};
