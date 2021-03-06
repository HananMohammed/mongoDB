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

    it('Can Add  Sub Document To an existing Record', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: []
        })
        joe.save()
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                user.posts.push({title: 'New Post' });
                return user.save();
            })
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user.post[0].title === 'New Post');
            })
        done();

    });
    })