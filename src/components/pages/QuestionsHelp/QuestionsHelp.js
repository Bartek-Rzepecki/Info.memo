import React from 'react';
import {ReactComponent as QuestionList} from '../../../assets/QuestionList.svg';
import Button from '../../UI/Button/Button';

import './QuestionsHelp.css';
import '../../../hoc/Layout/Layout.scss';
import {Link} from 'react-router-dom';

const QuestionsHelp = props => (
	<div className="QuestionsHelp">
		<div className="LeftSide">
			<p>
				Active Recall Sheet is a method which will help your remember any complex topic. The
				focus here is put on actively recalling information, that you already know. We
				provide you with a simple, structured sheet that will help you actively work with
				topics to learn. You make yourself a list of questions and then answer them without
				looking at any of your notes. You should check answers after each session and
				correct yourself where you were wrong. Then choose a color which will tell you next
				time if you answered right or wrong.
			</p>
		</div>
		<div className="RightSide">
			<QuestionList />
			<Link to="/questions">
				<Button>STUDY</Button>
			</Link>
		</div>
	</div>
);

export default QuestionsHelp;
