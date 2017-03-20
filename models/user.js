/**
 * Created by SergST on 20.03.2017.
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


//User Schema
const UserSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback)
}

module.exports.getUserByName = function(userName, callback){
    const query = {userName: userName};
    User.findOne(query, callback)
}