const passport = require("../Config/PasswordAuth");
const User = require("../Model/user")

const express = require("express");
const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/MainPage",
    failureRedirect: "/google/failure",
  })
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/google/failure" }),
  async function (req, res) {
    try {
      // Token is available in req.user.token after successful authentication
      const token = req.user.token;

      // Optionally, you can save the token to the database
      // Here, we're assuming you have a User model with a field for storing the token
      // You need to modify this according to your database schema
      const user = await User.findById(req.user.id);
      if (user) {
        user.token = token;
        await user.save();
      }

      // Redirect or send response as needed
      res.redirect('/profile'); // Redirect to the profile page after successful authentication
    } catch (error) {
      console.error("Error handling Google authentication callback:", error);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = router;
