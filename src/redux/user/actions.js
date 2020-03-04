// @constants
export const CHANGE_USER_LANG_CODE = 'CHANGE_USER_LANG_CODE';

/**
 * @param {string} langCode
 */
export const changeUserLangCode = (langCode) =>
    ({
        type: CHANGE_USER_LANG_CODE,
        payload: langCode
    });
