const Signup = require('../models/signup');
const {registerUserSchema} = require('../Type')
const bcrypt = require("bcryptjs");
const signUpHandler = async(req,res)=>{
    try{
        
        // console.log(req.body);
            
        const validate = registerUserSchema.safeParse(req.body);
        
        
        if(!validate.success){
            return res.status(400).json({
            message:"Error validating user"+ error,
        })}
        
        
        
        const { firstName, lastName, email, phone, password, confirmPassword, role } = req.body;
        
        
        const existingUser = await Signup.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ 
            message: "User with this email already exists" });
        }
        // if(password!==confirmPassword){
        //     return res.status(400).json({ message: "Password and confirmPassword mismatched" });
        // }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new Signup({
            firstName,
            lastName,
            email,
            phone,
            password:hashedPassword,
            confirmPassword,
            role
        })
        
        
        await newUser.save();
        
        
        return res.status(201).json({ message: "User registered successfully", user: newUser });
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}
module.exports=signUpHandler;