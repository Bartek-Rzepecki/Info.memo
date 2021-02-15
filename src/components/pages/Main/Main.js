import React from 'react';
import Methods from '../methods/Methods';
import './Main.scss';
import '../../../hoc/Layout/Layout.scss';
import '../methods/Methods.scss';
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
		<div className="RightSide">
			<Methods />
		</div>
	</>
);

export default Main;
