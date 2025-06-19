// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

    
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // set up new function 
    return function compare(a) {
          if (a > base){
            return true
          }  else {
            return false
          }
    }
      
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function lessThan(a) {
        if (a < base) {
            return true
        } else {
            return false
        }
    }
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * I: 
 * This function needs to be case insensitive.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
         // initiate variable and make case insensitiv
         startsWith = startsWith.toUpperCase();
        // create a function to compare startsWith & string
        return function Start(string) {   
        string = string.toUpperCase() 
        
        //return (string.startsWith())
             if (string[0]  === startsWith) {
              return true
        }   else {
          return false
        }
     }    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
       // initiate variable and make case insensitiv
       endsWith = endsWith.toUpperCase();
       // create a function to compare startsWith & string
           return function end(string) {   
           string = string.toUpperCase()   
           //return (string.startsWith())
           if (string[string.length - 1]  === endsWith) {
           return true
     }     else {
           return false
     }
  }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
      // create new array to house modified strings
        // create new array to house modified strings
    var newArr = []
    //set up a for loop for iteration
      for (let i = 0; i < strings.length; i++){
        strings[i] = modify(strings[i])
        newArr.push(modify(strings[i])); 
 }  return newArr


  // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    for (var i = 0; i < strings.length; i++) {
        if (strings[i] = test[i]) {
          return true
        } else {
          return false
        }
          
    }
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}