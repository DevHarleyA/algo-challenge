/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    // Code goes here
    if (text === text.split('').reverse().join('')){ // split the text, reverse it, then join it again
        return true
    }
    return false
}



module.exports = palindromeChecker;