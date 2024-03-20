const passport = require('../Config/PasswordAuth');
const session = require('express-session');
const express = require('express');
const router = express.Router();

router.use(session({
  secret: "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",
  resave: true,
  saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

passport.serializeUser(function(user, done) {
  done(null, user);
}); 

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = router;
