import React from 'react';
import './Main.scss';
import '../../../hoc/Layout/Layout.scss';
import {ReactComponent as Flashcards} from '../../../assets/Flashcards.svg';
import {ReactComponent as Soon} from '../../../assets/Soon.svg';
import {ReactComponent as SpacedRepetition} from '../../../assets/SpacedRepetition.svg';
import {ReactComponent as Questions} from '../../../assets/Questions.svg';
import {Link, Route, Switch} from 'react-router-dom';
const Main = props => (
	<>
		<div className="LeftSide">
			<p>
				Info.memo() is a tool that will help you remember things! We created this website
				with a mission to help anyone who had ever struggled with studying.
			</p>
			<p>
				You can choose your favourite learining method, all of them are scientifically
				proven.
			</p>
		</div>
		<div className="RightSide Methods">
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
	</>
);

export default Main;
