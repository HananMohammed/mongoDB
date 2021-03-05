const assert = require('assert');
const User = require('../src/user')

describe('Deleting a User', () => {

    let joe;

    beforeEach((done) => {

        joe = new User({
            name: 'Joe'
        });

        joe.save()
            .then(() => done() )
    });

    it('Model instance remove', (done) => {
        joe.remove()
        .then(() => User.findOne({name: 'Joe'}) )
        .then((user) => {
            assert(user === null);
        })
        done();
    });

    it('Class Method remove', (done) => {
        //Remove a bunch of records with some given criteria
        //at the same time
        User.remove({name:'Joe'})
            .then(() => User.findOne({name: 'Joe'}) )
            .then((user) => {
                assert(user === null);
                done();
            })
    });

    it('Class method findAndRemove ', (done) => {
        User.findOneAndRemove({name:'Joe'})
            .then(() => User.findOne({name: 'Joe'}) )
            .then((user) => {
                assert(user === null);
                done();
            })
    });

    it('Class method findByIdAndRemove ', (done) => {
        User.findByIdAndRemove(joe.id)
            .then(() => User.findOne({name: 'Joe'}) )
            .then((user) => {
                assert(user === null);
                done();
            })
    });
})