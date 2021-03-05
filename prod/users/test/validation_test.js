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
})