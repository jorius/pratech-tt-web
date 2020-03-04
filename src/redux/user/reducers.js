// @packages
import { combineReducers } from 'redux';

// @scripts
import { CHANGE_USER_LANG_CODE } from './actions';
import { config } from '../../config';

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

export const userReducer = combineReducers({
    languageCode: languageCodeReducer
});
