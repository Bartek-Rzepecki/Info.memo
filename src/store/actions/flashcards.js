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

export const pushCards = (deckName, cardsArray) => {
	return {
		type: actionTypes.PUSH_CARDS,
		deckToModify: deckName,
		cardsArray: cardsArray,
	};
};

export const deleteCard = (deckName, cardNumber) => {
	return {
		type: actionTypes.DELETE_CARD,
		deckToModify: deckName,
		cardToDelete: cardNumber,
	};
};
