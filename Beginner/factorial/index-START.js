/* Challenge
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/
// factorial => multiply number by the numbers leading up to it
// ie. factorial 5 => 5 = (1*2*3*4*5)

function factorial(n, memo) { // takes in two parameters => memo is unnecessary, don't need to hold value (purpose)
    memo = memo || {} // if it has a value, if not it's an empty object {}
    if(memo[n]){
        return memo[n]
    }  
    if (n === 0) {
        return 1
    }
    return memo[n] = n * factorial(n - 1, memo) // reursive function (calls itself in the return to run the function again)
}

// Alternative, can write without memo. memo doesn't need to hold a value since it's recursive

/*

if (n === 0) {
    return 1
}
return n * factorial(n-1)

*/

module.exports = factorial