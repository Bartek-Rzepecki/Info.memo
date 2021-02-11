import {combineReducers} from 'redux';
import authReducer from './auth';
import flashcardsReducer from './flashcards';

export default combineReducers({
	authReducer,
	flashcardsReducer,
});
