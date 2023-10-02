/* 
 * File Name: users.js
 * Student's Name: Adilet Masalbekov
 * StudentID: 301283691
 * Date: 10.01.2023
 */

var express = require('express');
var router = express.Router();

/* Get users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;