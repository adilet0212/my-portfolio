/* 
 * File Name: index.js
 * Student's Name: Adilet Masalbekov
 * StudentID: 301283691
 * Date: 10.01.2023
 */

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About Me page route
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects page route
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Services page route
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// Contact Me page route
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

router.post('/submit-form', function(req, res, next) {
  // Access form data using req.body
  console.log(req.body);
  // Send the message to the user and redirect him to the Home page
  res.send('Thank you for your message! I will get back to you soon.');
  res.redirect('/');
});

module.exports = router;