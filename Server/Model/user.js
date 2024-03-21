const mongoose=require("mongoose")

let userSchema = new mongoose.Schema({
    "User_Name": String,
    "Email": String,
    "Password": String,
    "google_id": String
})

const usermodel = mongoose.model("user_detail",userSchema)

module.exports=usermodel