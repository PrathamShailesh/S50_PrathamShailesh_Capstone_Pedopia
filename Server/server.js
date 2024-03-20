const express = require('express');
const cors = require('cors');
const userroute=require('./Routes/user')
const authroute=require('./Routes/auth')
const connectDatabase = require('./Config/Database');

const app = express();
const port = 3000;

connectDatabase();

app.use(cors());
app.use(express.json()); 

app.use('/',userroute)
app.use("/auth",authroute)


app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
