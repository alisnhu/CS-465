var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel')

/* GET home page. */

router.get('/',controller.travel);
module.exports = router;


/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/
