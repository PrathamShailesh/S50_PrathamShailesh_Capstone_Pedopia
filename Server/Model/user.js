const mongoose=require("mongoose")

let userSchema = new mongoose.Schema({
    "User_Name": String,
    "Email": String,
    "Password": String
})

const usermodel = mongoose.model("user_detail",userSchema)

module.exports=usermodel