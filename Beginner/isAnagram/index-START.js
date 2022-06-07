/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// linear 

function isAnagram(stringA, stringB) {
    let arrayA = stringA.split('').sort()
    let arrayB = stringB.split('').sort()

    for (let i = 0; i < arrayA.length; i++){
        if (arrayA[i] !== arrayB[i] || arrayA.length !== arrayB.length){
            return false
        }
    }
    return true
}

// Parameters: two strings
// Return: Boolean (True or False)
// Example: isAnagram('silent', 'listen') // should return true
// Pseudo-Code: 

// Anagram => if they share all the same letters 

/*
function isAnagram(stringA, stringB) {
    //parameter: two strings
    //return: boolean
    // example isAnagram('silent', 'listen') // should return true
    // pseudocode
    // set strings to arrays
    // set arrayB to filterArray variable
    // loop the arrayA filter each character out of arrayB
    // if the filtered array is empty after loop, false
    let arrayA = stringA.split('')
    let arrayB = stringB.split('')
    if (arrayA.length !== arrayB.length){
        return false
    }
    let filterArray = arrayB
    for (let i = 0; i < arrayA.length; i++){
        filterArray = filterArray.filter(char => char !== arrayA[i])
    }
    if (filterArray.length === 0){
        return true
    }else{
        return false
    } 
}
*/

module.exports = isAnagram