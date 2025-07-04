// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
   // set up loop
   for ( var i = 0; i <= array.length; i++) {
    //print the values
    console.log(array[i])
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
    // set up loop for reverse intake
    for (var i = array.length - 1; i >= 0; i--)
    console.log(array[i])
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  let newArr = []
  for (var key in object) {
  newArr.push(key)
  console.log(newArr)
   } return newArr
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
     
 for (var key in object) {
  console.log(key);

 } 
}
 
  
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  let newArr = []
  for (var key in key) {
  newArr.push('key')
  } return Object.values(object)
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
     
   
  for (var key in object) {
    console.log(object[key])
    }
  }
   
     
 

     
 

  
 
 
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //create cout variable
  var count = 0
  // set up loop for count iterations
  for (var key in object) {
    // code count  aparatus
    count++;
  }
  //return value
  return count
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 *
 * I: Iterate over an object and get its values
 * O: Put the results into a new array and print the results in reverse order
 * C; 
 * E
 */


 
  
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  

    
 
    //setup a variable to house the keys
    var newArr = []  
    //Add a for loop to iterarate and find the values
 for (var key in object){
    //then push the results into new array
   newArr.unshift(object[key]);
 }
  for (var i = 0; i <= newArr.length - 1;  i++){
 console.log(newArr[i])
  }
 }      
  
  // YOUR CODE ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}