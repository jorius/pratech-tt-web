// @packages
import { combineReducers } from 'redux';

// @scripts
import { config } from '../../config';

/**
 * @returns {string}
 */
const versionReducer = (
    state = config.initialState.appInfo.version, action
) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const appInfoReducer = combineReducers({
    version: versionReducer
});
