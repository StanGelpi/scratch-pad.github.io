// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 * I: two intergers set as parameters to the range function
 * O: return an array containing all the intergers between the two parameters
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
  //initialize new array to hold result
  var newArr = [];
  //set up low to high iteration count
  if (start < end) {
   for (var i = start; i <= end; i++){
     newArr.push(i)   
    } return newArr
   //set up high to low iteration count   
 } else if (start > end) {
    for (var i = start; i >= end; i--) {
       console.log('see')
     newArr.push(i)
   } return newArr
   //console.log(newArr)
 }
 
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}