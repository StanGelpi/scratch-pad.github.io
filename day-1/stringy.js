// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 * I: we will be working with a String
 * O: we will output the number of charachters in the string
 * C:
 * E:
 */
function length(string) {
    // YOUR CODE BELOW HERE //
      //write lngth of string to console
return string.length;

    
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 * I: we are working with the contents of a string
 * O: we will output a new string with all characters converted to LowerCase
 * C:
 * E:
 */

function toLowerCase(string) {

    // YOUR CODE BELOW HERE //
  //create new string and assign converted values
  var newString = string.toLowerCase();
  //return results
  return newString




    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 * I: we will convert an inout string
 * O: and output a new string with converted values
 * C:
 * E:
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
// create new string and assign converted values
var caps = string.toUpperCase();
//return results
return caps


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 * I: input string to change to dash case
 * O: New string with dashes instead of spaces
 * C: 
 * E:
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //create new string to seperate the values of string
    var apart = string.split(" ")
    //create new string to join valus with dash
    var joined = apart.join('-')
    //force new string to lower case
    var result = joined.toLowerCase()
    //return new string
    return result
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * 
 * I: an input string and a single character
 * O: boolean true or false
 * C:
 * E:
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //remove case sensitivity
let newStr = string.toLowerCase()
let newChar = char.toLowerCase()
//set up if statement to see if character starts string
if (newStr[0] === newChar) {
return true
} // set up else staement
else {
return false
}
}
    

    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * I: we are l=ooking at the contents of a string and cpmparing it to a character
 * O: we will return a boolean value true or false
 * C:
 * E:
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
//create new variables to eliminate case sensitivity
let newStr = string.toLowerCase()
let newChar = char.toLowerCase()
//use if statement to see if string ends with character
if (newStr[newStr.length - 1] == newChar) {
return true
//set up else statement
} else {
return false
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 * I: we will be cocatenating two strings
 * O: we will output one longer string
 * C:
 * E:
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// concatenate the two strings
var result = stringOne.concat(stringTwo)
// return result
return result



    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 * I; any number of strings
 * O: returned as one joined string
 * C:
 * E:
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  //place strings into array
  var args = Array.from(arguments)
  return args.join('')
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 * I; Compare the length of 2 strings
 * O: return the longer string
 * C:
 * E:
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length){
        return stringOne
    } else {
        return stringTwo
    }
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * I;
 * O:
 * C:
 * E:
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
     //compare alphabetical values
     stringOne.localeCompare(stringTwo)
     //Plus one if greater than
     if (stringOne > stringTwo){
         return -1
     //-1 if less than
     } else if (stringOne < stringTwo) {
         return 1
     // return 0 if equal
     } else if (stringOne === stringTwo) {
         return 0
     }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * I;
 * O:
 * C:
 * E:
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //Compare alphabetical values of strings
    stringOne.localeCompare(stringTwo)
    // if statements to determine actions
    if (stringOne < stringTwo) {
        return -1
    } else if (stringOne > stringTwo) {
        return 1
    } else if (stringOne === stringTwo){
        return 0
    }




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
