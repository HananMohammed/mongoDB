const assert = require('assert');
const User = require('../src/user')

describe('Validating Records', () => {

    it('require a user name ', () =>  {
        const user = new User({name: undefined});
        const validationResult = user.validateSync();
        const message = validationResult.errors.name.message
        console.log(message)
    });

    it('requires a user\'s name longger than 2 characters', function () {
        const user = new User({name: 'AL'});
        const validationResult = user.validateSync();
        const {message} = validationResult.errors.name;
        assert(message === 'Name Must be Longer than 2 characters')

    });
    it('disallow ivalid records from being saved', function (done) {
        const user = new User({name: 'AL'});
        const validationResult = user.validateSync();
        user.save()
            .catch((validationResult) => {
                const {message} = validationResult.errors.name;
                assert(message === 'Name Must be Longer than 2 characters')
                done();
            })
    });
})