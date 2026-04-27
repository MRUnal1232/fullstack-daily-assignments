const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.loginUser = async (req, res) => {
    try {
        const { emailAddress, password } = req.body
        const user = await User.findOne({ emailAddress })

        if (!user) {
            return res.json({ status: false, message: 'Invalid email or password' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ status: false, message: 'Invalid email or password' })
        }

        res.json({ status: true, message: 'Login successful', user: { fullName: user.fullName, emailAddress: user.emailAddress } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: 'Server error' })
    }
}

exports.registerUser = async (req, res) => {
    try {
        const { fullName, emailAddress, mobileNo, password } = req.body
        const userExists = await User.findOne({ emailAddress })

        if (userExists) {
            return res.json({
                status: false,
                message: 'User already exists'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ fullName,emailAddress,mobileNo,password: hashedPassword})
        await newUser.save()
        console.log("Saved user:", newUser) 
        res.json({status: true,message: 'User registered successfully'})

    } catch (error) {
        console.log(error)
       res.status(500).json({ status: false, message: 'Server error' })
    }
}