const Signup = require('../models/signup');
const { registerUserSchema } = require('../Type');
const bcrypt = require("bcrypt");

const signUpHandler = async (req, res) => {
    console.log(req.body); // Log the incoming request body for debugging

    try {
        // Validate the request body against the schema
        const validate = registerUserSchema.safeParse(req.body);
        
        if (!validate.success) {
            console.log(validate.error.errors);
            return res.status(400).json({
                message: "Error validating user",
                errors: validate.error.errors, // Return validation errors if any
            });
        }

        const { firstName, lastName, email, phone, password, confirmPassword, role } = req.body;

        // Check if the user already exists
        const existingUser = await Signup.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                message: "User with this email already exists" 
            });
        }

        // Uncomment and use this check to ensure passwords match
        // if (password !== confirmPassword) {
        //     return res.status(400).json({ message: "Password and confirmPassword mismatched" });
        // }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user
        const newUser = new Signup({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword, // Store hashed password
            role,
        });
        
        // Save the user to the database
        await newUser.save();
        console.log("successfull");
        
        return res.status(201).json({ 
            
            message: "User registered successfully", 
            user: { 
                firstName: newUser.firstName, 
                lastName: newUser.lastName, 
                email: newUser.email,
                phone: newUser.phone,
                role: newUser.role
            }
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ 
            message: "Server error", 
            error: error.message 
        });
    }
}

module.exports = signUpHandler;
