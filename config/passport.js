const passport = requrie('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, 
    refreshToken, profile, cb) {
        User.findOne({ googleID: profile.id }, function(err, user) {
            if (err) return cb(err);
            if (user {
                return cb(null, user);
            } else {

                let newUser = new User({
                    name: profile.displayName,
                    email: profille.emails[0].value,
                    googleId: profile.id
                })
                newUser.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newUser)
                 })
                }
            })
        }
    })