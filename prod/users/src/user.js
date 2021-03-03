//Require Mongo DB
const Mongoose = require('mongoose');

//Create Schema For User Model
const Schema = Mongoose.Schema;

//Create User Model
const UserSchema = new Schema({
    name: String,

});

const User = Mongoose.model('user', UserSchema);

//make sure that any other file inside this application
// that require this file in can get access
//to the user model that created
module.exports = User;