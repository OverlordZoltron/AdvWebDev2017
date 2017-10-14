var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'This is the index page!', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet imperdiet sem. Quisque id tempor dolor, eget pharetra dui. Cras tristique mi in faucibus blandit. Vivamus a mi sit amet tortor ultrices fermentum convallis ut justo. Ut in est tincidunt, egestas magna at, ullamcorper sapien. Nam consectetur congue volutpat. Curabitur fermentum feugiat nulla, eu consectetur felis cursus fringilla. Morbi et blandit nisl, vel fringilla purus. Aenean in tristique dui, et pellentesque velit. Mauris posuere tempus justo, et tempor mi pellentesque ut.'});
});

router.get('/form', function (req, res, next) {
    res.render('form', {title: 'Simple Form'});
});

router.post('/results', function (req, res, next) {
    res.render('results', {title: 'Results', 
        anEmail: req.body.email, 
        aName: req.body.name, 
        comments: req.body.comments});
});

router.get('/about', function (req, res, next) {
    res.render('about', {title: 'About Page', pg1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet imperdiet sem. Quisque id tempor dolor, eget pharetra dui. Cras tristique mi in faucibus blandit. Vivamus a mi sit amet tortor ultrices fermentum convallis ut justo. Ut in est tincidunt, egestas magna at, ullamcorper sapien. Nam consectetur congue volutpat. Curabitur fermentum feugiat nulla, eu consectetur felis cursus fringilla. Morbi et blandit nisl, vel fringilla purus. Aenean in tristique dui, et pellentesque velit. Mauris posuere tempus justo, et tempor mi pellentesque ut.',
     pg2: 'Cras vehicula dui condimentum augue aliquet sollicitudin sed ut nulla. Ut odio mi, pretium non convallis et, congue at enim. Maecenas vehicula mollis libero et scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In aliquam a augue ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et ligula commodo, elementum ante vel, congue arcu. Morbi et odio luctus, pulvinar neque sed, luctus felis. Pellentesque nec mattis elit.'});
});

module.exports = router;
