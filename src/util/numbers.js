/**
 * @param {number} min
 * @param {number} max
 */
export const getRandomIntInRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

