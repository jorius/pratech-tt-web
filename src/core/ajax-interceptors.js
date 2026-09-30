// @packages
import axios from 'axios';

// @scripts
import constants from '../constants';
import { HTTP_UNAUTHORIZED_CODE } from './service-mocker';
import { config } from '../config';

/**
 * @param {Object} globalUI
 */
const addResponseInterceptors = () => {
    axios.interceptors.response.use(
        response => {
            const { data } = response;

            if (data.messageType === constants.notificationType.SUCCESS) {
                return data;
            }

            // TODO: This promise reject is unhandled by the moment
            return Promise.reject(new Error('Empty data'));
        },
        error => {
            if (error.response.status === HTTP_UNAUTHORIZED_CODE) {
                return {
                    httpCode: HTTP_UNAUTHORIZED_CODE,
                    message: config.text.loginPage.error,
                    messageType: constants.notificationType.ERROR,
                    success: false
                };
            }

            // TODO: "Unkown error!"
            return Promise.reject(error);
        }
    );
};

/**
 * @param {Object} globalUI
 */
export const addAjaxInterceptors = () =>
    addResponseInterceptors();
