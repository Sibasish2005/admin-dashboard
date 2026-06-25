import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id:String,
    name:String,
    email:String,
    role:String,
},{
    timestamps:true,
});

export default  mongoose.models.Users || mongoose.model("Users",UserSchema)