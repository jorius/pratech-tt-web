/**
* Decodes a Base64 string.
* @param {string} str - The string to be decoded.
* @return {string}
*/
export const decodeBase64String = (str) =>
    window.atob(str);

/**
 * Encodes a string to Base64.
 * @param {string} str - The string to be encoded.
 * @return {string}
 */
export const encodeBase64String = (str) =>
    window.btoa(str);

    /**
 * Returns the base URL of the current site.
 * @returns {string}
 */
export const getBaseUrl = () =>
    window.location.origin;

/**
 * Navigates to the given Url.
 * @param {string} url - The Url to navigate.
 */
export const navigateToUrl = (url) => {
    window.location.href = `${getBaseUrl()}/#${url}`;
};

/**
 * Returns the window inner width.
 * @returns {number}
 */
export const getWindowInnerWidth = () =>
    window.innerWidth;

