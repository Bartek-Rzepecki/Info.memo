import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/actions';
import Button from '../../UI/Button/Button';
import EmptyFlashcard from '../../UI/Flashcard/EmptyFlashcard/EmptyFlashcard';
import Modal from '../../UI/Modal/Modal';

import './Flashcards.css';
import '../../../hoc/Layout/Layout.scss';

const Flashcards = props => {
	const [isChoosingDeck, setIsChoosingDeck] = useState(false);
	const [decksArray, setDecksArray] = useState([]);
	// useEffect(() => {
	// 	props.onRetrieveData();
	// }, []);
	useEffect(() => {
		const tempDecksArray = [];

		for (let key in props.flashcardsDecks) {
			tempDecksArray.push(key);
		}
		setDecksArray(tempDecksArray);
	}, []);

	let decks;
	if (decksArray.length !== 0) {
		decks = decksArray.map(deck => {
			const location = {pathname: '/flashcards-studying', search: deck};
			return (
				<span key={deck} className="DeckItem">
					<Link to={location}>{deck}</Link>
				</span>
			);
		});
	} else {
		console.log('b');
		decks = <span className="DeckItem">You must create a deck first</span>;
	}

	return (
		<>
			<div className="Flashcards">
				<div className="LeftSide">
					<Button
						clicked={() => {
							setIsChoosingDeck(state => !state);
						}}>
						STUDY
					</Button>
					<Link to="/flashcards-edit-decks">
						<Button> EDIT DECKS</Button>
					</Link>
				</div>
				<div className="RightSide">
					<EmptyFlashcard whiteText="gato" greyText="cat" />
				</div>
			</div>
			<Modal show={isChoosingDeck} modalClosed={() => setIsChoosingDeck(state => !state)}>
				<div className="FlashcardsDeckList">{decks}</div>
			</Modal>
		</>
	);
};
const mapStateToProps = state => {
	return {
		flashcardsDecks: state.flashcardsDecks,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		//onRetrieveData: () => dispatch(actions.retrieveAsyncData),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Flashcards);
