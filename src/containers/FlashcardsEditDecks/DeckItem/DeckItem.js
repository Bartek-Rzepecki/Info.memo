import React from 'react';
import {Link} from 'react-router-dom';

const DeckItem = ({deck, setActiveDeckName, deleteDeck}) => {
	let ChoseDeckItemClasses = ['ChoseDeckItem'];
	if (deck.isActive) {
		ChoseDeckItemClasses = ['ChoseDeckItem', 'ChoseDeckItemActive'];
	} else {
		ChoseDeckItemClasses = ['ChoseDeckItem'];
	}
	const location = {pathname: '/flashcards-studying', search: deck.name};
	return (
		<div className="DeckItem" key={deck.name}>
			<span className="DeckName">{deck.name}</span>
			<span className="DeckItemsControl">
				<div className="DeckStudy">
					<Link to={location}> STUDY</Link>
				</div>
				<div className={ChoseDeckItemClasses.join(' ')} onClick={setActiveDeckName}>
					<i className="fas fa-play"></i>
				</div>
				<div className="DeleteDeckItem" onClick={deleteDeck}>
					<i className="far fa-trash-alt"></i>
				</div>
			</span>
		</div>
	);
};

export default DeckItem;
