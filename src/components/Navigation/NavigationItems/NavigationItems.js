import React from 'react';
import {useState} from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
// import Button from './components/UI/Button/Button';
import Auth from '../../../containers/Auth/Auth';
import Modal from '../../UI/Modal/Modal';

const NavigationItems = props => {
	const [isAuthorizing, setIsAuthorizing] = useState(false);

	return (
		<>
			<ul className={classes.NavigationItems}>
				{/* This is logo, and 'home' button */}
				<NavigationItem link="/" exact>
					<span className={classes.Logo}>Info.memo()</span>
				</NavigationItem>
				<span className={classes.NavRightSide}>
					<li onClick={() => setIsAuthorizing(state => !state)}>Register / Log in</li>
					<NavigationItem link="/study">Study</NavigationItem>
				</span>
			</ul>
			<Modal
				show={isAuthorizing}
				modalClosed={() => {
					setIsAuthorizing(prevState => !prevState);
				}}
			>
				<Auth />
			</Modal>
		</>
	);
};

export default NavigationItems;
