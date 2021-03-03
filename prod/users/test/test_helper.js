//require mongoose library and assign it to Constant variable
const mongoose = require('mongoose');

//Tell mongoose library to connect to mongo
mongoose.connect('mongodb://localhost/users_test');

mongoose.connection
    .once('open', () => console.log('Good To go'))
    .on('error', (error) => {
        console.warn('Warning', error)
    });