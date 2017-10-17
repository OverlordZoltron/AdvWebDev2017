var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mixin Form',
  selectedVal: 0});
});

router.post('/index', function (req, res, next) {
    res.render('index', {title: 'Mixin Form',
    selectedVal: req.body.number});
});

module.exports = router;
