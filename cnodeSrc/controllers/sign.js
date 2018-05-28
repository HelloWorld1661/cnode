var eventproxy = require('eventproxy');
var UserModel = {};

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
        console.log('item');
        return item === '';
    });

    var isPassDiff = (pass !== re_pass);

    if (hasEmptyInfo || isPassDiff) {
        ep.emit('info_error', 'Registration information is wrong');
        return;
    }

    // 3. Save to database
    UserModel.getUserBySignupInfo(username, email, function(err, users) {
        if (err) {
            ep.emit('info_error', 'Failed to get user data!');
            return;
        }
        if (users.length > 0) {
            ep.emit('info_error', 'Username or mailbox is occupied');
            return;
        }

        UserModel.addUser({ username: name, pass: pass, email: email }, function(err, result) {
            console.log('222222222222');
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

};

exports.signout = function(req, res) {

};