import React from 'react';
import './Main.scss';
import {ReactComponent as Flashcards} from '../../../assets/Flashcards.svg';
import {ReactComponent as Soon} from '../../../assets/Soon.svg';
import {ReactComponent as SpacedRepetition} from '../../../assets/SpacedRepetition.svg';
import {ReactComponent as Questions} from '../../../assets/Questions.svg';
import {Link, Route, Switch} from 'react-router-dom';
const Main = props => (
	<div className="Main">
		<div className="Left-Side">
			Info.memo() is a tool that will help you remember things! We created this website with a
			mission to help anyone who had ever struggled with studying.
			<br /> You can choose your favourite learining method, all of them are scientifically
			proven.
		</div>
		<div className="Right-Side">
			<Link to="/flashcards-help">
				<Flashcards />
			</Link>
			<Link to="/" className="Disabled">
				<Soon className="Disabled" />
			</Link>
			<Link to="/spaced-repetition-help">
				<SpacedRepetition />
			</Link>
			<Link to="/questions-help">
				<Questions />
			</Link>
		</div>
	</div>
);

export default Main;
