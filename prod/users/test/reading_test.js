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
                assert(users[0]._id.toString() === joe.id.toString())
                done();
            })

    })

    it("find a user with a particular id ", (done) => {
        User.findOne({_id: joe._id})
            .then((user) => {
                assert(user.name === 'joe');
            })
        done();
    })

})