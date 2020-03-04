// @packages
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

// @scripts
import { rootReducer } from '../redux';

/**
 * @returns {Store}
 */
export const initializeReduxStore = () => {
    const reduxLogger = createLogger();
    const middlewares = [thunk, reduxLogger];

    const state = {};

    const store = createStore(
        rootReducer,
        state,
        applyMiddleware(...middlewares)
    );

    return store;
};
