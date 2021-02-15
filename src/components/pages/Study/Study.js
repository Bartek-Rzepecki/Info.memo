import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Flashcards} from '../../../assets/Flashcards.svg';
import {ReactComponent as Soon} from '../../../assets/Soon.svg';
import {ReactComponent as SpacedRepetition} from '../../../assets/SpacedRepetition.svg';
import {ReactComponent as Questions} from '../../../assets/Questions.svg';

import './Study.scss';
import '../../../hoc/Layout/Layout.scss';

const Study = props => (
	<div className="Study">
		<div className="Row">
			<Link to="/flashcards-help">
				<Flashcards />
			</Link>
			<Link to="/" className="Disabled">
				<Soon className="Disabled" />
			</Link>
		</div>
		<div className="Row">
			<Link to="/spaced-repetition-help">
				<SpacedRepetition />
			</Link>
			<Link to="/questions-help">
				<Questions />
			</Link>
		</div>
	</div>
);

export default Study;
