var express = require('express');
var router = express.Router();
var signController = require('../controllers/sign');

//display sign up page
router.get('/signup', signController.showSignup);

//submit sign up information
router.post('/signup', signController.signup);

//display sign in page
router.get('/signin', signController.showSignin);

//submit sign in information
router.post('/signin', signController.signin);

//sign out
router.get('/signout', signController.signout);

// //Display posting topic page
// router.get('/topic/create', auth.requireLogin, function(req, res) {
//     res.render('topic/create');
// });
// //Handle user-submitted topic information
// router.post('/topic/create', auth.requireLogin, function(req, res) {

// });


module.exports = router;