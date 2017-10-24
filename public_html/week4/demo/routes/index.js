var express = require('express');
var router = express.Router();
var ctrlHome = require('./review.controller');


router.all('/', ctrlHome.home);
router.all('/index', ctrlHome.home);
router.all('/view/:id?', ctrlHome.view);
router.all('/update/:id?', ctrlHome.update);
router.all('/delete/:id?', ctrlHome.delete);


module.exports = router;
