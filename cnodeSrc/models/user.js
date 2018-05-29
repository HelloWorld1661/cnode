var mongoose = require('mongoose');
mongoose.connect('mongodb:127.0.0.1/node_club');

var UserSchema = new mongoose.Schema({
    username: Staring,
    pass: String,
    email: String
});