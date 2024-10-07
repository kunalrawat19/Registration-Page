const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const connection = require("./Database")

require('dotenv').config();


app.use(express.json());
connection();
const PORT = process.env.PORT || 4000 ;



app.use('/api/auth', authRoutes);


app.get('/',(req,res)=>{
    res.send("The server is up and running");
})

app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`);
    
})