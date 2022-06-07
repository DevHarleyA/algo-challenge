/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/

// linear

function fizzBuzz(n) {
    // loop n times =. ORDER MATTERS, put combo first, then check
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else {
            console.log(i)
        }
    }
}

// Parameters: n is our max number
// Return: console log numbers 1 through n, print fizz for multiples of 3, print buzz for multiples of 5, fizzbuzz for both.
// Examples: fizzBuzz(6) should give 1, 2, fizz, 4, buzz, 6
// Pseudo Code: 

module.exports = fizzBuzz