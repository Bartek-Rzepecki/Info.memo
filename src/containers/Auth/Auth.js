import React, {useState, useCallback, useMemo} from 'react';
import {checkValidity} from '../../shared/checkValidity';
import {nameRules, emailRules, passwordRules} from '../../shared/dataRules';
import {connect} from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/auth';

const Auth = props => {
	/* isSignup is switch-state between register and log in form */
	const [isSignup, setIsSignup] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const isNameCorrect = useMemo(() => checkValidity(name, nameRules), [name]);
	const isEmailCorrect = useMemo(() => checkValidity(email, emailRules), [email]);
	const isPasswordCorrect = useMemo(() => checkValidity(password, passwordRules), [password]);

	const submitHandler = event => {
		event.preventDefault();
		//Is not Signup => register
		if (!isSignup && isNameCorrect && isPasswordCorrect && isEmailCorrect) {
			props.onAuth(email, password, isSignup, name);
		}
		// isSignup => login
		else if (isSignup && isEmailCorrect && isPasswordCorrect) {
			props.onAuth(email, password, isSignup);
		}
	};

	return (
		<form className={classes.Form} onSubmit={submitHandler}>
			<span className={classes.Title}>{!isSignup ? 'Register' : 'Log in'}</span>
			<span className={classes.Data}>
				{!isSignup && (
					<Input
						inputValue={name}
						setValue={event => setName(event.target.value)}
						labelDescription="First Name"
						invalidResponse="Provide valid first name"
						isInputCorrect={isNameCorrect}
						inputType="text"
						isRequired={true}
					/>
				)}

				<Input
					inputValue={email}
					setValue={event => setEmail(event.target.value)}
					labelDescription="Email"
					invalidResponse="Provide valid email adress"
					isInputCorrect={isEmailCorrect}
					inputType="email"
					isRequired={true}
				/>

				<Input
					inputValue={password}
					setValue={event => setPassword(event.target.value)}
					labelDescription="Password"
					invalidResponse="Correct password contains at least 8 characters, one capital letter, a
						number and special character"
					isInputCorrect={isPasswordCorrect}
					inputType="password"
					isRequired={true}
				/>
			</span>
			<span>
				<Button>{!isSignup ? 'SIGN UP' : 'SIGN IN'}</Button>
				<h3 className={classes.AuthMode} onClick={() => setIsSignup(!isSignup)}>
					{!isSignup
						? 'Already have an account? Sign in'
						: 'You don’t have an account yet? Sign up'}
				</h3>
			</span>
		</form>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, isSignup, name) =>
			dispatch(actions.auth(email, password, isSignup, name)),
	};
};

export default connect(null, mapDispatchToProps)(Auth);
