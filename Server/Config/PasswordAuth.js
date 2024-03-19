const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const GOOGLE_CLIENT_ID = "36387387896-db17jo85e8a0619r5cr4ecgkv2tnp3m3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  function(accessToken, refreshToken, profile, done) {
    // Your authentication logic here
    // Example: Find or create user based on profile information
    // usermodel.findOrCreate({ googleId: profile.id }, function (err, user) {
    if (!err) {
      return done(null, profile);
    } else {
      return done(err);
    }
  }
));

module.exports = passport;
