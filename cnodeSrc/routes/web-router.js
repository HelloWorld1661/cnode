var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//display sign up page
router.get('/signup', function(req, res) {
    res.render('sign/signup');
});

//submit sign up information
router.post('/signup', function(req, res) {
    //implement to submit sign up function

});

//display sign in page
router.get('/signin', function(req, res) {
    res.render('sign/signin');
});

//submit sign in information
router.post('/signin', function(req, res) {
    //implement to submit sign in function

});

//sign out
router.post('/signout', function(req, res) {
    //implement to submit sign out function 

});

module.exports = router;