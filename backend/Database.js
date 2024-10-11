const mongoose = require("mongoose");
require('dotenv').config()


const connection = async()=>{try{mongoose.connect('mongodb://localhost:27017/RegisterDatabase'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
console.log("mongodb connection successfull");
}

catch(error){
    console.log(error.message);
    process.exit(1)
  }
}


module.exports = connection;
