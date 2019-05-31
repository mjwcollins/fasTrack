var express = require('express');
var router = express.Router();
var foodsCtrl = require('../controllers/foods');

router.post('/selects/:id/foods', reviewsCtrl.create);

module.exports = router;