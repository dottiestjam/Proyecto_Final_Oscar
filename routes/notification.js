/**
 * Created by oscar on 16/06/16.
 */
var express = require('express');
var router = express.Router();
var database = require('../lib/notification');
var notificacion = new database.Notificacion();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Home' });
});

router.get('/create', function(req, res, next) {
    res.render('create', { title: 'create' });
});

router.post('/create', function(req, res, next) {
    var id = req.body.noti_id;
    var num = req.body.number;
    var cli = req.body.client;
    var prod = req.body.product;
    var txt = req.body.text;

    var ValueNoti = {'number':num, 'client':cli, 'product':prod, 'text':txt}

    notificacion.createNoti(id,ValueNoti,'Activas');
    res.render('create', { title: 'create' });
});

router.get('/show', function(req, res, next) {
    res.render('show', { title: 'show' });
});




module.exports = router;
