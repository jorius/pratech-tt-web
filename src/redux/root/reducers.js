// @packages
import { combineReducers } from 'redux';

// @scripts
import { appInfoReducer } from '../app';
import { userReducer } from '../user';

const appReducer = combineReducers({
    appInfo: appInfoReducer,
    user: userReducer
});

/**
 * @param {Object} state - Current application state.
 * @param {Object} action - Current dispatched action.
 * @returns {Object}
 */
export const rootReducer = (state, action) =>
    appReducer(state, action);
