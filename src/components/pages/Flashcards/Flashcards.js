import React from 'react';
import {Link} from 'react-router-dom';

import Button from '../../UI/Button/Button';
import EmptyFlashcard from '../../UI/Flashcard/EmptyFlashcard/EmptyFlashcard';

import './Flashcards.css';
import '../../../hoc/Layout/Layout.scss';

const Flashcards = props => (
	<div className="Flashcards">
		<div className="LeftSide">
			<Link to="/flashcards-studying">
				<Button> STUDY</Button>
			</Link>
			<Link to="/flashcards-edit-decks">
				<Button> EDIT DECKS</Button>
			</Link>
		</div>
		<div className="RightSide">
			<EmptyFlashcard whiteText="gato" greyText="cat" />
		</div>
	</div>
);

export default Flashcards;
