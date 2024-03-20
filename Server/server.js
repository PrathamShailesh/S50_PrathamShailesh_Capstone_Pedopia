const express = require('express');
const cors = require('cors');
const userroute=require('./Routes/user')
const authroute=require('./Routes/auth')
const connectDatabase = require('./Config/Database');
const passport = require("passport");
const session = require('express-session');

const app = express();
const port = 3000;

connectDatabase();

app.use(session({
    secret: "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",
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
