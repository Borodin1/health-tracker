// Core
import { combineReducers } from 'redux';

// Reducers
import { authReducer as auth } from '../reducers/auth';
import { scoreReducers as score } from '../reducers/score';
import { profileReducers as profile } from '../reducers/profile';

export const rootReducer = combineReducers({
    auth, score, profile,
});
