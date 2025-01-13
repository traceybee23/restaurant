var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Test error-handling route
// router.get('/error-test', (req, res) => {
//   throw new Error('This is a test error!');
// });

module.exports = router;
