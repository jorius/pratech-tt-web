// @packages
import axios from 'axios';

// @scripts
import { config } from '../../config';

// @constants
export const CHANGE_USER_LANG_CODE = 'CHANGE_USER_LANG_CODE';
export const LOGIN = 'LOGIN';

/**
 * @param {string} username
 * @param {string} password
 */
export const userLogin = (username, password) => dispatch =>
    new Promise((resolve, reject) =>
        axios.post(config.services.auth.login, { username, password })
            .then((response) => {
                if (!response.success) {
                    reject(response);
                    return;
                }

                dispatch({
                    type: LOGIN,
                    payload: response
                });
                resolve(response);
            })).catch(error => Promise.reject(error));

/**
 * @param {string} langCode
 */
export const changeUserLangCode = (langCode) =>
    ({
        type: CHANGE_USER_LANG_CODE,
        payload: langCode
    });
