//Require Mongo DB
const Mongoose = require('mongoose');
const PostSchema = require('./post');
//Create Schema For User Model
const Schema = Mongoose.Schema;

//Create User Model
const UserSchema = new Schema({
    name: {
        type: String,
      //  required: [true, 'Name Is Required'],
        validate: {
          validator: (name) => name.length > 2,
          message:  'Name Must be Longer than 2 characters'
        },

    },
    postCount: Number,
    posts: [PostSchema]
});

const User = Mongoose.model('user', UserSchema);

//make sure that any other file inside this application
// that require this file in can get access
//to the user model that created
module.exports = User;