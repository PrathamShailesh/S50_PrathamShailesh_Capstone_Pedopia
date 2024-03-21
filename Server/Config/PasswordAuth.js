const passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require('../Model/user')
require('dotenv').config();


const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;


passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },


  async function authenticate(request, accessToken, refreshToken, profile, done) {
    try {
        let user = await User.findOne({ google_id: profile.id });
        console.log(profile.displayName)
        if (!user) {
            user = new User({
                google_id: profile.id, 
                User_Name: profile.displayName,
                Email: profile.emails[0].value
            });
            await user.save();
        }
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}
)
);

module.exports = passport;
