const express = require("express");
const connectDB = require("./config/database");
const USERPOSTDATA = require("./modules/user");


const app = express();

app.post("/signup",async(req,res) =>{
    const userpostdata = new USERPOSTDATA({
        firstName: "ravi",
        lastName: "mohite",
        emailId: "yogi@gmail.com"
    }
    );
    try{
        await userpostdata.save();
    res.send("userpostdata added successfully...!")
    }catch(err){
        res.status(400).send("error saving user:" +err.message);
    }

});




connectDB()
 .then(() =>{
     console.log("database connection established...!");
     app.listen(7777,() =>{
         console.log("server is successgully listening on port 7777...!");
     });
     }).catch(err =>{
     console.log("database connection cannot be established...!");
});
