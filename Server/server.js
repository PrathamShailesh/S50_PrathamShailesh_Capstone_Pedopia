const express = require('express');
const cors = require('cors');
const userroute=require('./Routes/user')
const authroute=require('./Routes/auth')
const connectDatabase = require('./Config/Database');
const passport = require("passport");
const session = require('express-session');
require('dotenv').config();

const secret = process.env.Secret
const app = express();
const port = 3000;

connectDatabase();

app.use(session({
    secret: secret,
    resave: true,
    saveUninitialized: true,
    cookie:{secure :false}
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(express.json()); 

app.use('/',userroute)
app.use("/auth",authroute)


app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
