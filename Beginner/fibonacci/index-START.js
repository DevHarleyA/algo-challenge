/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

// LINEAR => O(n)
function fibonacci(n) {
    // define a first num 
    let previous = 0
    //define second num
    let current = 1
    // define an element counter
    let counter = 0
    // do a while loop that adds them together
    while (counter < n){
        let temp = 0
        temp = previous + current 
        previous = current
        current = temp

        counter++
    }
    return current
}

// Parameters: the nth (any number they give you) element in the fib sequence
// Returns: the number at that nth point of the sequence
// Examples: fibonacci(6) = 8, fibonacci(10) = 55
// Pseudo Code: above

// fibonacci = a series of numbers in which each number is the sum of the two that precede it

module.exports = fibonacci