const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the Signup schema
const signupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    
  },
  phone: {
    type: Number,
    required: true,

  },
  password: {
    type: String,
    required: true,
    minlength: 4
  },
  confirmPassword:{
    type:String,
    require:true,
    minlength:4
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'guest'], // Enums to restrict role
    default: 'user'
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

// Hash the password before saving the document
// signupSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// Compare passwords for login
// signupSchema.methods.comparePassword = async function (inputPassword) {
//   return await bcrypt.compare(inputPassword, this.password);
// };

// Create the Signup model
const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
