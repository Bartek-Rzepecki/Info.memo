import React from 'react';
import './Navbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
const Navbar = props => (
	<nav className="Navbar">
		<NavigationItems />
	</nav>
);

export default Navbar;
