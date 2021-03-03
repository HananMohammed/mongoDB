// **************Mocha***********************
// write Some test to make Sure Can Create
// New User and save it to database
// ******************************************
//it's A function to make an Assertion
const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
    it('Saves a user', (done) => {
        //Create Actual Assertion
         const joe = new User({
             name: 'Joe'
         });
         //save this instance to DB
         joe.save()
             .then(() => {
                // Has Joe Saved Successfully???
                 //if joe saved Successfully fliped joe.isNew Flag
                 assert(!joe.isNew);

             });
            done();
    });
});
