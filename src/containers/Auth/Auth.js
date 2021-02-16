import React, {useState, useCallback, useMemo} from 'react';
import {checkValidity} from '../../shared/checkValidity';
import {nameRules, emailRules, passwordRules} from '../../shared/dataRules';
import {connect} from 'react-redux';

import Button from '../../components/UI/Button/Button';
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
		console.log('Submit handler is workingd');
		if (!isSignup && isNameCorrect && isPasswordCorrect && isEmailCorrect) {
			console.log('Register!');
			props.onAuth(email, password, isSignup, name);
		}
		// isSignup => login
		else if (isSignup && isEmailCorrect && isPasswordCorrect) {
			console.log('User is already signed up, login');
			props.onAuth(email, password, isSignup);
		}
	};

	return (
		<form className={classes.Form} onSubmit={submitHandler}>
			<span className={classes.Title}>{!isSignup ? 'Register' : 'Log in'}</span>
			<span className={classes.Data}>
				{!isSignup && (
					<div className={classes.InputWrapper}>
						<label>
							<input
								className={classes.Input}
								type="text"
								placeholder="First name"
								value={name}
								onChange={event => setName(event.target.value)}
								required
							/>
							<span className={classes.LabelDescription}>First name</span>
						</label>
						{!isNameCorrect && name !== '' && (
							<span className={classes.InvalidResponse}>
								Provide valid first name
							</span>
						)}
					</div>
				)}
				<div className={classes.InputWrapper}>
					<label>
						<input
							className={classes.Input}
							type="email"
							placeholder="Email"
							value={email}
							onChange={event => setEmail(event.target.value)}
							required
						/>
						<span className={classes.LabelDescription}>Email</span>
					</label>
					{!isEmailCorrect && email !== '' && (
						<span className={classes.InvalidResponse}>Provide valid email adress</span>
					)}
				</div>
				<div className={classes.InputWrapper}>
					<label>
						<input
							className={classes.Input}
							type="password"
							placeholder="Password"
							value={password}
							onChange={event => setPassword(event.target.value)}
							required
						/>
						<span className={classes.LabelDescription}>Password</span>
					</label>
					{!isPasswordCorrect && password !== '' && (
						<span className={classes.InvalidResponse}>
							Correct password contains at least 8 characters, one capital letter, a
							number and special character
						</span>
					)}
				</div>
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
