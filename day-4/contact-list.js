// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * I: create a factory function 
 * O: return contact objects
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 * 
 * 
 * I: create a factory function 
 * O: Return an object that will manage contacts and applied with 5 methods
 * 
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 

function makeContactList(){
    var contacts = [];
    return {
        // we implemented the length api for you//
        length:function() {
            return contacts.length
        },
        addContact:function(contact){
            contacts.push(contact)
        },
        findContact:function(fullName) {
            
            for (var i = 0; i < contacts.length; i++) {
                var match = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                    if (match === fullName) {
                    return contacts[i];
                    } else {
                    return undefined;
                    }    
            }
        },
        removeContact: function(contact) {
           if (contacts.includes(contact)) {
            contacts.splice(contact, 1)
           }  
        },
        printAllContactNames: function(){
            var newArr = []
            for (var i = 0; i <= contacts.length - 1; i++) {
               let fullName = contacts[i].nameFirst + ' ' + contacts[i].nameLast
                git newArr.push(fullName);
                
            }    return newArr.join('\n')
        }
    }

}
       
  




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}