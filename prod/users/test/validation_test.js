const assert = require('assert');
const User = require('../src/user')

describe('Validating Records', () => {

    // it('require a user name ', (done) =>  {
    //     const user = new User({name: undefined});
    //     const validationResult = user.validateSync();
    //     const {message} = validationResult.errors.name
    //     console.log(message)
    //     done();
    // });

    it('requires a user\'s name longger than 2 characters', function (done) {
        const user = new User({name: 'AL'});
        const validationResult = user.validateSync();
        const {message} = validationResult.errors.name;
        assert(message === 'Name Must be Longer than 2 characters')
        done();
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