import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';
const NavigationItem = ({link, exact, children}) => (
	<li>
		<NavLink
			className={classes.NavigationItem}
			to={link}
			exact={exact}
			activeClassName={classes.active}
		>
			{children}
		</NavLink>
	</li>
);

export default NavigationItem;
