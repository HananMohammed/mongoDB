const assert = require('assert');
const User = require('../src/user');

describe('Updating Record', function () {

    let joe ;

    beforeEach((done) => {
        joe = new User({ name: 'Joe', likes:0 })
        joe.save()
           .then(() => done());
    });

    function assertName(operation, done)
    {
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'POP')
                done();
            })
    }
   // it('Instance type using  Set n Save Methodology for Updating Record', (done) => {
   //      joe.set('name','Alex')
   //      assertName(joe.save(), done)
   //
   //
   // })
    //
    // it('A model instance can update', (done) => {
    //     assertName(joe.update({name: 'Alex'}), done)
    // })
    //
    // it('A model Class Can Update', (done) => {
    //     assert(
    //         User.update({name: 'Joe'},{name: 'Alex'})
    //         , done
    //     )
    // })
    // it('A model Class Can Update one record', (done) => {
    //     assert(
    //         User.findOneAndUpdate({name: 'Joe'},{name: 'Alex'})
    //         , done
    //     )
    // })
    // it('A model Class Can find a record with Id and Update', (done) => {
    //     assert(
    //         User.findByIdAndDelete(joe._id,{name: 'Alex'})
    //         , done
    //     )
    // })

    it('A User Can Have Their Likes incremented by one ', function (done) {
        User.updateOne({name: 'joe'},{$inc : { likes:10 }})
            .then(() => User.findOne({name: 'joe'}))
            .then((user) => {
                assert(user.likes === 10);
            });
        done()
    });
});


//preferable way for update
// function maybeUpdateName(user){
//
// }
//
// function maybeUpdateEmail(user){
//
// }
//
// maybeUpdateName(user);
// maybeUpdateEmail(user);
// user.save();