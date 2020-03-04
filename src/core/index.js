// @scripts
import { addAjaxInterceptors } from './ajax-interceptors';
import { initializeReduxStore } from './redux-store';
import { initializeServiceMocker } from './service-mocker';

const initializeApp = () => {
    const store = initializeReduxStore();
    const serviceMocker = initializeServiceMocker();

    global.core = {
        store,
        serviceMocker
    };

    addAjaxInterceptors();

    return global.core;
};

export const {
    store
} = initializeApp();
