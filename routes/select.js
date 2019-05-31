const express = require('express');
const router = express.Router();
const passport = require('passport');
const selectController = require('../controllers/selects'); 

/* GET select page. */
router.get('/', selectController.index);
router.get('/new', selectController.new);
router.post('/new', selectController.create);

module.exports = router;