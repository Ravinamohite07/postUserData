const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        emailId:{
            type: String
        }
    }
);

  
 //create a mongoose model(USERPOSTDATA model)

 //const USERPOSTDATA = mongoose.model("USERPOSTDATA ",userSchema);

 //module.exports = USERPOSTDATA;
 
 module.exports = mongoose.model("USERPOSTDATA ",userSchema);
