// @packages
import axios from 'axios';
import constants from '../constants';

/**
 * @param {Object} globalUI
 */
const addResponseInterceptors = () => {
    axios.interceptors.response.use(
        response => {
            const { data } = response;

            if (data.messageType === constants.notificationType.SUCCESS) {
                return data.data;
            }

            // TODO: This promise reject is unhandled by the moment
            return Promise.reject(new Error('Empty data'));
        },
        error => {
            const { response } = error;

            if (response.data.message && response.data.messageType === constants.notificationType.ERROR) {
                // TODO: Error in the response
            }

            // TODO: Unkown error!
            return Promise.reject(error);
        }
    );
};

/**
 * @param {Object} globalUI
 */
export const addAjaxInterceptors = () =>
    addResponseInterceptors();
