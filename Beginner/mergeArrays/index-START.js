/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) { // allows you to have multiple arrays as an argument if you're not sure how many will be submitted

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array] // creates an array that has the 
    });

    return [...new Set([...jointArray])] // Set constructor makes sure there are no copies
 
}


module.exports = mergeArrays