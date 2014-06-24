var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/tintuc', function(req, res) {
    res.render('tintuc');
});
router.get('/datnen-duan', function(req, res) {
    res.render('tintuc');
});
router.get('/nhadat-canban', function(req, res) {
    res.render('tintuc');
});
router.get('/nhadat-chothue', function(req, res) {
    res.render('tintuc');
});
router.get('/bietthu-venbien', function(req, res) {
    res.render('tintuc');
});
router.get('/canho', function(req, res) {
    res.render('tintuc');
});
router.get('/lienhe', function(req, res) {
    res.render('lienhe');
});


router.get('/details/detail4', function(req, res) {
    res.render('./details/detail4');
});
router.get('/details/detail5', function(req, res) {
    res.render('./details/detail5');
});
router.get('/details/detail6', function(req, res) {
    res.render('./details/detail6');
});

module.exports = router;
