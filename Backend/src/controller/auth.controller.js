const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')



async function registerController(req, res){
    const {username, password} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        username
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message: 'username already used'
        })
    }

    const user = await userModel.create({
        username,
        password: await bcrypt.hash(password, 10)
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)
    res.cookie('token', token)


    res.status(201).json({
        message: 'account create successfully',
        user
    })

}

async function loginController(req, res){
    const {username, password} = req.body

    const user = await userModel.findOne({
        username
    })

    if(!user){
        return res.status(401).json({
            message: 'Invalid user name',
        })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if(!isValidPassword){
        return res.status(401).json({
            message: 'Invalid Password'
        })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(201).json({
        message: 'Loggedin successfully',
        user
    })


}



module.exports = {
    registerController,
    loginController
}