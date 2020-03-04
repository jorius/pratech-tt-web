// @packages
import { combineReducers } from 'redux';

// @scripts
import { CHANGE_USER_LANG_CODE, LOGIN } from './actions';
import { config } from '../../config';

/**
 * @returns {boolean}
 */
const isLoggedInReducer = (
    state = config.initialState.user.isLoggedIn, action
) => {
    switch (action.type) {
        case LOGIN:
            return true;
        default:
            return state;
    }
};

/**
 * @returns {string}
 */
const languageCodeReducer = (
    state = config.initialState.user.languageCode, action
) => {
    switch (action.type) {
        case CHANGE_USER_LANG_CODE:
            return action.payload;
        default:
            return state;
    }
};

/**
 * @returns {object[]}
 */
const permissionsReducer = (
    state = config.initialState.user.permissions, action
) => {
    switch (action.type) {
        case LOGIN:
            return action.payload.permissions;
        default:
            return state;
    }
};

export const userReducer = combineReducers({
    isLoggedIn: isLoggedInReducer,
    languageCode: languageCodeReducer,
    permissions: permissionsReducer
});
