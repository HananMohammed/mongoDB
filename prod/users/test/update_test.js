const assert = require('assert');
const User = require('../src/user');

describe('Updating Record', function () {

    let joe ;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' })
        joe.save()
           .then(() => done());
    });

   it('Instance type using  Set n Save Methodology for Updating Record', (done) => {
        joe.set('name','Alex')
        joe.save()
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex')
                done();
            })

   })


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