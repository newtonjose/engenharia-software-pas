const express = require('express');
const activateXR = require('../app/hello-webxr');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, _next) {
  res.render('index', { title: 'Express' });
});


router.get('/hello-webxr', function(req, res, _next) {
  res.render('webxr/hello-webxr', { title: 'WebXR'});
});


module.exports = router;
