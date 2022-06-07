/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Code goes here
    let wordsArray = text.split(" ")
    let longWord = wordsArray[0]
    for (let i = 1; i < wordsArray.length; i++) {
        if (longWord.length < wordsArray[i].length) {
            longWord = wordsArray[i]
        } 
    }
    return longWord
}

// Parameters: a string of text
// Return: the longest word in the array
// Example: you have a sentence, look at all the words to return the longest word
// Pseudo-Code:
// (1) .split() the text into individual words
// (2) loop through and compare the word lengths to each other
// (3) return the word with the longest length


module.exports = longestWord