import User from '../models/usersModel.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }
        const hashPassword = await bcrypt.hash(password, 16);
        const newUser = new User({
            "name": name, 
            "email": email, 
            "password": hashPassword 
           });
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                name: newUser.name,
                email: newUser.email,
                _id: newUser._id,
            }
        });
    } catch (error) {
        console.log("Error in creating users: ", error.message);
        res.status(500).json({
            message: "Internal server Error",
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({
                message: "Invalid username or password",
            });
        }
        else {
            res.status(200).json({
                message: "User logged in successfully", user:{
                    name: user.name,
                    email: user.email,
                    _id: user._id,    
                }
            });
        }
    } catch (error) {
        console.log("Error in logging in: ", error.message);
        res.status(500).json({
            message: "Internal server Error",
        });
    }
};