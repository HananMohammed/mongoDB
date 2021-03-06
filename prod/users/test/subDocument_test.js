const assert = require('assert');
const User = require('../src/user');

describe('subDocument Test ', () => {

    it('Can Create a Sub Document', (done) => {
        const joe = new User({
            name: 'joe',
            posts: [ {title: 'Post Title'} ]
        });
        joe.save()
            .then(() => User.findOne({name: 'joe'}))
            .then( (user) => {
                assert(user.posts[0].title === 'Post Title');
                done();
            })
    });
})