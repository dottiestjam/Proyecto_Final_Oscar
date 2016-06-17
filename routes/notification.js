/**
 * Created by oscar on 16/06/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.send('Proyecto Final')
});

module.exports = router;
