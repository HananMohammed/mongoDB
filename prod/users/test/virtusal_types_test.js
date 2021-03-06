const assert = require('assert');
const User = require('../src/user');

describe('Virtual Types Test ', () => {

    it('postCount Returns number of posts', (done) => {

        const hanan = new User({
            name: 'hanan',
            posts: [{title: 'postTitle'}]
        });

        hanan.save()
            .then(() => User.findOne({name: 'hanan'}))
            .then((user) => {
                assert(hanan.postCount === 1);
                done();
            })

    });


})