import React from 'react';

const DeckItem = ({deck, setActiveDeckName, deleteDeck}) => {
	let ChoseDeckItemClasses = ['ChoseDeckItem'];
	if (deck.isActive) {
		ChoseDeckItemClasses = ['ChoseDeckItem', 'ChoseDeckItemActive'];
	} else {
		ChoseDeckItemClasses = ['ChoseDeckItem'];
	}
	return (
		<div className="DeckItem" key={deck.name}>
			<span>{deck.name}</span>
			<span className="DeckItemsControl">
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
