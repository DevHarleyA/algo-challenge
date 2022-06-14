/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

// Parameters: an array and a number


function whereIBelong(arr, num) {
   // write a count to count the number of values in the array that are greater than or less than the num
   let count = 0
   // write a for loop that iterates through each value in the array
   for (let i = 0; i < arr.length; i++) {
      // for every number that is less than num, add to the counter to show index
      if (num > arr[i]) {
         // increment counter
         count ++
      }
   }
   return count
}



module.exports = whereIBelong