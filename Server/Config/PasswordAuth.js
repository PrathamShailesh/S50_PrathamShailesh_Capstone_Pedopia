const passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require('../Model/user')

const GOOGLE_CLIENT_ID = "147089106124-9e19qlk68p5sph6vhel67sh3d4n04krb.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },


async function (request, accessToken, refreshToken, profile, done) {
  let user = await User.findOne({ googleId: profile.id });
  if (!user) {

    user = new User({
      googleId: profile.id,
      displayName: profile.displayName,
      email: profile.emails[0].value

    });
    await user.save();
  }
  return done(null, user);
  }
)
);

module.exports = passport;
