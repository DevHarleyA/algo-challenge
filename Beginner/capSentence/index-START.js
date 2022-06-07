/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



// How can I make this work?
function capSentence(text) {
   // create a variable for the parameter
    let str = text.toLowerCase()
   // split it into individual words
    let words = str.split(" ")
   // make a variable for the empty array
    let answer = []
   // loop through each word and capitalize the first letter
    for (let i = 0; i < words.length; i++) {
      // we want to shift off the first letter, make it capital, and add it back to the rest of the word
      answer.push(words[i][0].toUpperCase() + words[i].slice(1))
    }
   // Join the words in the sentence back together
      return answer.join(' ')
}

// Parameters: string that has two or more words => Are all string letters lowercase or is it mixed case?
// Return: a string with the first letter of each word capitalized
// Examples: ('the tales of scotch!' => 'The Tales Of Scotch')
// Pseudo Code: above

module.exports = capSentence