/**
 * @function - Generates an specified-length array filled with random integers, within a specified limit
 * @param {int} length - length of array to be generated
 * @param {int} limit - limit of highest integer to be generated
 */

var generateRandomIndices = function (length = 0, limit = 0) {
    let finalIndices = [];
    while(length) {
        let index = Math.floor(Math.random() * limit + 1);
        finalIndices.push(index);
        length--;
    }

    return finalIndices;
}

module.exports = {
    generateRandomIndices
}