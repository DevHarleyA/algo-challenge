/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    // declare variable for return array
    let arr = array
    let answer = []
    // loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            answer.push(arr[i])
        } 
        // dont need to do anything with leftover falsy values since returning new answer array
    }

    return answer
    // if falsy value, remove, if truthy push to answer array
}

// Parameters: array with falsy and truthy values
// Return: array with truthy values only
// Example: falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
// Pseudo Code: above

// falsy values: false, 0, -0, "", null, undefined, NaN

// alternative example: return array.filter(el => el) // filter in itself is a condition (check for true or false)

module.exports = falsyBouncer