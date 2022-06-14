/* 
Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

function chunkArray(array, size) {
    // declare an empty answer array
    let answer = []
    // loop through array argument
    for (let i = 0; i < (array.length / size); i++) { // edit 
        // splice allows me to remove numbers and will return an array (create my new array!) and moves remaining numbers to start at 0 index
        let chunk = array.splice(0, size)
        console.log(chunk)
        answer.push(chunk)
    }
    return answer
    // push the numbers into smaller arrays that do not exceed the size argument
    // return answer array
}

// Parameters: an array and the size/length of the result arrays
// Question: is it an array of numbers only, or does it contain other types 
// Return: one large array with nested arrays that do not exceed the size/length parameter
// Example: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

// Pseudo-Code


module.exports = chunkArray