//require mongoose library and assign it to Constant variable
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connect to Mongoose Only One Time

before((done) => {
    //Tell mongoose library to connect to mongo
    mongoose.connect('mongodb://localhost/users_test');

    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error)
        });

})

//Ensure To Drop DB before Run Test

beforeEach((done) => {
    // //Find A Collection of Users And Drop All
    // // record before run test
    // mongoose.connection.collections.users.drop(() => {
    //     //drop Accepts CallBAck Fun that will be Excuted once it drops users
    //     //Ready to Run Next test
    //     done();
    // });


    //You can't drop multiple of collection at the same time
    const { users, comments, blogposts } = mongoose.connection.collections;
    users.drop(() => {
        comments.drop(()=>{
            blogposts.drop(() => {
                done();
            })
        })
    })
})