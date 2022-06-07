/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// COME BACK AND WALK THROUGH

function maxRecurringChar(text) {
    let textArray = text.split('')
    let recurringArray = []
    for (let i = 0; i < text.length;i++){
        let filterArray = []
        filterArray = textArray.filter(char => char === textArray[i])

        if (recurringArray.length < filterArray.length){
            recurringArray = filterArray
        }
    }
    return recurringArray[0]
}

// Parameters: a string of text
// Return: the character that occurs the most times (could be number or letter)
// Example: maxRecurringChar('aabacada') // will return 'a'
// Pseudo-Code:

module.exports = maxRecurringChar;