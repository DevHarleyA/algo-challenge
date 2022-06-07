/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/


// linear => one loop!

function hammingDistance(stringA, stringB) {
    // set a counter
    let count = 0
    // loop through the two string(s)
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) {
            count++
        }
    }
    return count
}

// Parameters: two strings of equal length
// Return: number (distance from different characters)
// Examples: hammingDistance('rover', 'river') // should return 1
// Pseudo Code: 


// hammingDistance = count the number of bits where two same-length messages differ

module.exports = hammingDistance