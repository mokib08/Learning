
const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const router = express.Router()



router.post('/register', async(req, res) => {
    const {username, password} = req.body


    const isUserAlready = await userModel.findOne({
        username
    })

    if(isUserAlready){
        return res.status(409).json({
            message: 'username already used'
        })
    }

    const user = await userModel.create({
        username, password
    })


    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET )

    res.cookie('token', token)

    res.status(201).json({
        message: 'user register successfully',
        user
    })

})

router.post('/login', async(req, res) => {
    const {username, password} = req.body

    const user = await userModel.findOne({
        username : username
    })

    if(!user){
        return res.status(401).json({
            message: 'Invalid user name'
        })
    }

    const userpassword =  password === user.password
    if(!userpassword){
        return res.status(401).json({
            message: 'Invalid password'
        })
    }


    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(200).json({
        message: 'Loggedin successfully',
        user
    })

})


router.get('/user', async(req, res) => {
    const {token} = req.cookies

    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }


    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id: decoded.id
        }).select('-password')

        res.status(200).json({
            message: 'user data fetched successfully',
            user
        })
    }catch(err){
        return res.status(401).json({
            message: "unauthorized - Invalid token"
        })
    }
})


router.get('/logout', (req, res) => {
    
   res.clearCookie('token')
   res.status(200).json({
    message:"user logged out successfully"
   })
})



module.exports = router