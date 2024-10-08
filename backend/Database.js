const mongoose = require("mongoose");
require('dotenv').config()


const connection = async() => {
  
  try{

    await mongoose.connect(process.env.MONGO_URI)
    
    console.log("mongodb connection successful");
  
  }
  
  catch(error){
    console.log(error.message);
    process.exit(1)
  }
}


module.exports = connection;
