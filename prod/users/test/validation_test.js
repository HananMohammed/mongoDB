const assert = require('assert');
const User = require('../src/user')

describe('Validating Records', () => {

    it('require a user name ', () =>  {
        const user = new User({name: undefined});
        const validationResult = user.validateSync();
        const message = validationResult.errors.name.message
        console.log(message)


    });
})