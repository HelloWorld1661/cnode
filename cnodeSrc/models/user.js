var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost/node_club';
mongoose.connect(DB_URL);

/**
 * The connection is successful
 */
mongoose.connection.on('connected', function() {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * Connection Exception
 */
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * Disconnected
 */
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
});

var UserSchema = new mongoose.Schema({
    username: String,
    pass: String,
    email: String
});

UserSchema.statics.getUserBySignupInfo = function(username, email, callback) {
    var cond = [{ username: username }, { email: email }];
    this.find({ $or: cond }, callback);
};

UserSchema.statics.addUser = function(user, callback) {
    this.create(user, callback);
};

UserSchema.statics.getUser = function(username, pass, callback) {
    this.findOne({ username: username, pass: pass }, callback);
};

module.exports = mongoose.model('User', UserSchema);