var eventproxy = require('eventproxy');
var UserModel = require('../models/user'); //EventProxy. An implementation of task/event based asynchronous pattern.

exports.showSignup = function(req, res) {
    res.render('sign/signup');
};

exports.signup = function(req, res) {
    //1.Get user data
    var username = req.body.loginname;
    var pass = req.body.pass;
    var re_pass = req.body.re_pass;
    var email = req.body.email;
    var ep = new eventproxy();

    ep.on('info_error', function(msg) {
        res.status(422);
        res.render('sign/signup', { error: msg });
    })

    //2.Check data
    var hasEmptyInfo = [username, pass, re_pass, email].some(function(item) {
        return item === '';
    });

    var isPassDiff = (pass !== re_pass);

    if (hasEmptyInfo || isPassDiff) {
        ep.emit('info_error', 'Registration information is wrong');
        return;
    }

    // 3. Save to database
    // Check for existing users

    UserModel.getUserBySignupInfo(username, email, function(err, users) {
        if (err) {
            console.log(err);
            ep.emit('info_error', 'Failed to get user data from database!');
            return;
        }
        //the user existed.
        if (users.length > 0) {
            ep.emit('info_error', 'Username or mailbox is occupied');
            return;
        }
        //Do not have an existing user Info,then adding new user information into the database.
        UserModel.addUser({ username: name, pass: pass, email: email }, function(err, result) {
            if (result) {
                res.render('sign/signup', {
                    success: 'Congratulations, your registration was successful'
                });
            } else {
                ep.emit('info_error', 'registration failed');
            }
        })
    })
};

exports.showSignin = function(req, res) {
    res.render('sign/signin');
};

exports.signin = function(req, res) {
    var username = req.body.loginname;
    var pass = req.body.pass;

    if (!username || !pass) {
        res.status(422);
        return res.status('sign/signin', { error: 'The information you filled in is incomplete！' });
    }
    UserModel.getUser(username, pass, function(err, user) {
        if (user) {
            req.session.user = user;
            res.render('sign/signin', {
                success: 'sign in suceesfully'
            });
        } else {
            res.status(422);
            res.render('sign/signin', {
                error: 'wrong user name or password'
            });
        }
    })
};

exports.signout = function(req, res) {
    req.session.destroyed();
    res.redirect('/');
};