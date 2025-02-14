// import mongoose
const mongoose = require("mongoose");

//connect to database
 const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://ravinamohite07:gah7omMhOUmA5EiP@namstenode.budiy.mongodb.net/postUserData"
    );
 };

module.exports = connectDB;
