var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('home')
});

router.get('/about', function (req, res, next) {
  res.render('about')
});

router.get('/users', function (req, res, next) {
  res.render('users');
});

router.get('/contact', function (req, res, next) {
  res.render('contact');
});

router.get('/Projects', function (req, res, next) {
  res.render('Projects');
});

module.exports = router;
