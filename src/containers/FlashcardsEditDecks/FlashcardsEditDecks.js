import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/flashcards';
import Flashcard from '../../components/UI/Flashcard/Flashcard';
import FlashcardControl from './FlashcardControl/FlashcardControl';
import DeckItem from './DeckItem/DeckItem';
import Modal from '../../components/UI/Modal/Modal';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import './FlashcardsEditDecks.scss';
import '../../hoc/Layout/Layout.scss';

const FlashcardsEditDecks = props => {
	const [deckInputValue, setDeckInputValue] = useState('');
	const [activeDeckName, setActiveDeckName] = useState('');
	const [isAddingCards, setIsAddingCards] = useState(false);
	const [cardInputFront, setCardInputFront] = useState('');
	const [cardInputBack, setCardInputBack] = useState('');
	const [cardsOnList, setCardsOnList] = useState([]);
	const [activeCardFront, setActiveCardFront] = useState('');
	const [activeCardBack, setActiveCardBack] = useState('');
	const [cardNumber, setCardNumber] = useState(0);
	//This array is used FOR UI representation of decks,
	//The logical content of decks is stored in the Redux store
	const [decksArray, setDecksArray] = useState([]);

	//update State, and dependent UI when new Active Deck is chosen
	useEffect(() => {
		if (activeDeckName != '') {
			setCardNumber(0);
			setCardInputFront('');
			setCardInputBack('');
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
			setCardsOnList([]);

			if (props.flashcardsDecks[activeDeckName][0]) {
				console.log(activeDeckName);
				setActiveCardFront(props.flashcardsDecks[activeDeckName][0].front);
				setActiveCardBack(props.flashcardsDecks[activeDeckName][0].back);
			}
		}
	}, [activeDeckName]);

	useEffect(() => {
		if (activeDeckName !== '' && props.flashcardsDecks[activeDeckName].length !== 0) {
			setActiveCardFront(props.flashcardsDecks[activeDeckName][cardNumber].front);
			setActiveCardBack(props.flashcardsDecks[activeDeckName][cardNumber].back);
		}
	}, [cardNumber]);

	const addDeckHelper = () => {
		let tempDecksArray = [...decksArray];
		props.onAddDeck(deckInputValue);
		tempDecksArray.push({name: deckInputValue, isActive: false});
		setDecksArray(tempDecksArray);
		setDeckInputValue('');
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

	const AddCardToCardsArrayHandler = () => {
		if (cardInputFront && cardInputBack) {
			let card = {front: cardInputFront, back: cardInputBack};
			let tempActiveCards = [...cardsOnList];
			tempActiveCards.push(card);
			setCardsOnList(tempActiveCards);
			setCardInputFront('');
			setCardInputBack('');
		}
	};

	const PushCardsArrayHandler = () => {
		if (cardsOnList.length !== 0) {
			props.onPushingCards(activeDeckName, cardsOnList);
			setCardsOnList([]);
			setIsAddingCards(false);
			setActiveCardFront(props.flashcardsDecks[activeDeckName][0].front);
			setActiveCardBack(props.flashcardsDecks[activeDeckName][0].back);
		}
	};

	let decks = decksArray.map(deck => (
		<DeckItem
			key={deck.name}
			deck={deck}
			setActiveDeckName={() => setActiveDeckName(deck.name)}
			deleteDeck={() => DeleteDeckHandler(deck.name)}
		/>
	));

	let cards = cardsOnList.map((card, index) => (
		<div className="CardItem" key={`${card.front} ${card.back} ${index}`}>
			<span className="CardItemText">{card.front}</span>
			<span className="CardItemText">{card.back}</span>
		</div>
	));

	return (
		<>
			<div className="FlashcardsEditDecks">
				<div className="LeftSide">
					<div className="Decks">
						<div className="YourDecks">Your Decks: </div>
						<div className="DeckList">
							{props.flashcardsDecks.length !== 0 ? decks : null}
						</div>
						<label className="AddDeckLabel">
							<span
								className="AddDeckText"
								onClick={event => AddNewDeckHandler(event)}
							>
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
					<Flashcard front={activeCardFront} back={activeCardBack} />
					<span className="FlashcardControls">
						<FlashcardControl
							clicked={() => {
								if (
									activeDeckName !== '' &&
									props.flashcardsDecks[activeDeckName].length !== 0
								) {
									let newCardNumber = cardNumber;
									newCardNumber === 0
										? (newCardNumber =
												props.flashcardsDecks[activeDeckName].length - 1)
										: (newCardNumber -= 1);

									setCardNumber(cardNumber => newCardNumber);
								}
							}}
						>
							<i className="fas fa-angle-left"></i>
						</FlashcardControl>
						<FlashcardControl
							clicked={() => {
								if (
									activeDeckName !== '' &&
									props.flashcardsDecks[activeDeckName].length !== 0
								) {
									let newCardNumber =
										(cardNumber + 1) %
										props.flashcardsDecks[activeDeckName].length;
									setCardNumber(cardNumber => newCardNumber);
								}
							}}
						>
							<i className="fas fa-angle-right"></i>
						</FlashcardControl>
						<FlashcardControl
							clicked={() => {
								if (activeDeckName !== '') setIsAddingCards(state => !state);
							}}
						>
							<i className="fas fa-plus"></i>
						</FlashcardControl>
						<FlashcardControl clicked={() => {}}>
							<i className="fas fa-pen"></i>
						</FlashcardControl>
						<FlashcardControl clicked={() => {}}>
							<i className="far fa-trash-alt"></i>
						</FlashcardControl>
					</span>
				</div>
			</div>
			<Modal
				show={isAddingCards}
				modalClosed={() => {
					setIsAddingCards(state => !state);
					setCardsOnList([]);
				}}
			>
				<div className="AddCardsModal">
					<span className="AddCardsTitle"> ADD CARDS</span>
					<div className="AddCardsList">
						<div className="AddCardsInput">
							<Input
								inputValue={cardInputFront}
								setValue={event => setCardInputFront(event.target.value)}
								labelDescription="Front"
								inputType="text"
								isInputCorrect={true}
							/>
							<Input
								inputValue={cardInputBack}
								setValue={event => setCardInputBack(event.target.value)}
								labelDescription="Back"
								inputType="text"
								isInputCorrect={true}
							/>
							<span className="AddCardButton" onClick={AddCardToCardsArrayHandler}>
								<i className="fas fa-plus"></i>
							</span>
						</div>
						{cards}
					</div>
					<span
						className="AddCardsArray"
						onClick={() => {
							PushCardsArrayHandler();
						}}
					>
						<Button>ADD CARDS</Button>
					</span>
				</div>
			</Modal>
		</>
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
		onPushingCards: (deckName, cardsArray) => dispatch(actions.pushCards(deckName, cardsArray)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(FlashcardsEditDecks);
