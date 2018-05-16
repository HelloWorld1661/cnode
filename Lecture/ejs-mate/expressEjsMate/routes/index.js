var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = {
        title: 'Express',
        hello: 'hello world!',
        names: ['Jon', 'Andy', 'cycy']
    }
    res.render('index', data);
});

module.exports = router;