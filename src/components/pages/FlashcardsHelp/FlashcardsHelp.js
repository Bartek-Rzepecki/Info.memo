import React from 'react';
import {Link} from 'react-router-dom';
import EmptyFlashcard from '../../UI/Flashcard/EmptyFlashcard/EmptyFlashcard';
import Button from '../../UI/Button/Button';

import './FlashcardsHelp.scss';
import '../../../hoc/Layout/Layout.scss';
const FlashcardsHelp = props => (
	<>
		<div className="LeftSide">
			<p>
				Flashcards is a method that helps you with remembering words or pieces of
				information that can be described with one word.
			</p>
			<p>
				On the one side of the card you write some clue or a word in a foreign language. On
				the other you write the information or a word that you want to learn. While
				learning, you'll see the front of the card and then say the word from the back of
				the card out loud. After that you can check if you were correct and give yourself
				points or schedule to repeat again. You can create decks of cards to categorise your
				study subjects.
			</p>
		</div>
		<div className="RightSide FlashcardsHelp">
			<EmptyFlashcard whiteText="perro" greyText="dog"></EmptyFlashcard>
			<Link to="/flashcards">
				<Button>STUDY</Button>
			</Link>
		</div>
	</>
);

export default FlashcardsHelp;
