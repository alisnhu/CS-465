var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main')

/* GET home page. */

router.get('/',ctrlMain.index);
module.exports = router;


/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/
