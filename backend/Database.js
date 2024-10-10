const mongoose = require("mongoose");


const connection = async()=>{try{mongoose.connect('mongodb+srv://tharshita0215:qY7Id61lZGKIGeLl@cluster0.lmsuyqe.mongodb.net/RegisterDatabase'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
console.log("mongodb connection successfull");
}
catch(error){
  console.log(error);
  Process.exit(1);
}

  
}


module.exports = connection;
