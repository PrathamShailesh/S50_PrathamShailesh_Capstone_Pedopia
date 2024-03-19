const express = require('express')

const app= express()

const port = 3000;

app.get("/ping",(req,res)=>{
    res.json({name:"Pratham"})
})

app.listen(port,()=>{
    console.log("Server is listening on port " + port);
})