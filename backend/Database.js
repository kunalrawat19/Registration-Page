const mongoose = require("mongoose");


const connection = async()=>{try{mongoose.connect('mongodb://127.0.0.1/RegisterDatabase'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
console.log("mongodb connection successfull");
}
catch(error){
  console.log(error);
  
}

  
}


module.exports = connection;
