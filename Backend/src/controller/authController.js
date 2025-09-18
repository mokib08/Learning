const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


async function registerController(req, res) {
    const { fullName: { firstName, lastName }, email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await userModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password: await bcrypt.hash(password, 10)
    })

    const token = jwt.sign({
        id: newUser._id
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(201).json({ message: "User registered successfully", user: newUser })

}


async function loginController(req, res) {
    const {email, password} = req.body;

    const userValid = await userModel.findOne({
        email
    })

    if(!userValid){
        return res.status(400).json({
            message: 'Invalid credentials'
        })
    }

    const isPasswordValid = await bcrypt.compare(password, userValid.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message: 'Invalid password'
        })
    }


    const token = jwt.sign({
        id: userValid._id
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(200).json({
        message: 'Login successful', user: userValid
    })


}


module.exports = { 
    registerController,
    loginController
};