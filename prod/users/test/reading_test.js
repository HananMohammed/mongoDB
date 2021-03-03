const assert = require('assert');
const User = require('../src/user');

describe('Reading Users Out of The database', () => {

    let joe;

    beforeEach((done) => {
        joe = new User({
            name: 'joe'
        })
        joe.save()
           .then(() => done());

    })
    it('find all Users with a name of joe', (done) => {
        User.find({name: 'joe'})
            .then((users) => {
                console.log(users);
                done();
            })

    })
})