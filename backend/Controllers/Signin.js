const Signup = require('../models/signup');
const bcrypt = require('bcrypt');
const signInHandler = async(req,res)=>{
    try{
        const{email, password}=req.body;
        
        const user = await Signup.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email ' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        res.send.status(200).json({ message: 'Signin successful', data: user });

    }
    catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}
module.exports = signInHandler;