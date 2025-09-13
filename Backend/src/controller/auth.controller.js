const userModel = require("../model/auth.model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


async function registerController(req, res){
    const {fullName: {firstName, lastName}, email, password} = req.body


    const isUserAlreadyExist = await userModel.findOne({
        email
    })


    if(isUserAlreadyExist){
        return res.status(401).json({
            message: 'the email already used'
        })
    }

    const user = await userModel.create({
        fullName:{ firstName, lastName},
        email, 
        password: await bcrypt.hash(password, 10)

    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(200).json({
        message: 'register successfully',
        user
    })


}

async function loginController(req, res){
    const {email, password} = req.body;

    const isUsreValid = await userModel.findOne({
        email
    })
    if(!isUsreValid){
        return res.status(401).json({
            message: 'Invalid email'
        })
    }


    const isPasswordValid = await bcrypt.compare(password, isUsreValid.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message: 'Invalid password'
        })
    }

    const token = jwt.sign({
        id: isUsreValid._id
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(200).json({
        message: 'Loggedin successfully',
        
    })

}



module.exports = {
    registerController,
    loginController
}