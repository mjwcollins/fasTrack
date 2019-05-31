const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/users'); 

//SOMETHING WRONG HERE GET STATEMENT I THINK

/* GET home page. */
router.get('/', usersController.index);

//google OAuth login route
router.get('/auth/google', 
passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

//google OAth callback route
router.get('/fasTrackOAuth', passport.authenticate(
  'google', 
  {
    successRedirect : '/select', 
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/')
});

//helper fn for protecting pages
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
