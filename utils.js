const sleep = (ms, callback) => setTimeout(() => callback, ms);

/**
 * Function that generates a random number between the two specified parameters
 * @param {*} min - (number) minimum
 * @param {*} max - (number) maximum
 */
const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;






module.exports = {
    sleep,
    getRandomNumber
};