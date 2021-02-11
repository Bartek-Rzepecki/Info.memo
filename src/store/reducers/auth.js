import * as actionTypes from '../actions/actionTypes';

const initialState = {
	token: null,
	localId: null,
	name: '',
	loading: false,
	error: null,
	redirectPath: '/',
};

const authStart = (state, action) => {
	return {...state, error: null, loading: true};
};

const authFail = (state, action) => {
	return {...state, error: action.error, loading: false};
};

const authSuccess = (state, action) => {
	return {
		...state,
		error: null,
		loading: false,
		token: action.token,
		localId: action.localId,
		name: action.name,
	};
};

const authLogout = (state, action) => {
	return {...state, token: null, localId: null, name: ''};
};

const authSetName = (state, action) => {
	return {...state, name: action.name};
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_FAIL:
			return authFail(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		case actionTypes.AUTH_SET_NAME:
			return authSetName(state, action);
		default:
			return state;
	}
};

export default authReducer;
