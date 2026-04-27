const bcrypt = require('bcrypt')
const User = require('../models/User')

const register = async (req, res) => {
  try {
    const { fullName, emailAddress, mobileNo, password } = req.body

    if (!fullName || !emailAddress || !mobileNo || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required"
      })
    }

    const existing = await User.findOne({ emailAddress })
    if (existing) {
      return res.status(409).json({
        status: false,
        message: "Email already registered"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      fullName,
      emailAddress,
      mobileNo,
      password: hashedPassword
    })

    await user.save()

    res.status(201).json({
      status: true,
      message: "User registered successfully"
    })

  } catch (error) {
    console.log("ERROR:", error)
    res.status(500).json({
      status: false,
      message: error.message
    })
  }
}

const login = async (req, res) => {
  try {
    const { emailAddress, password } = req.body

    if (!emailAddress || !password) {
      return res.status(400).json({
        status: false,
        message: "Email and password are required"
      })
    }

    const user = await User.findOne({ emailAddress })
    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Invalid email or password"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({
        status: false,
        message: "Invalid email or password"
      })
    }

    res.status(200).json({
      status: true,
      message: "Login successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        emailAddress: user.emailAddress,
        mobileNo: user.mobileNo
      }
    })

  } catch (error) {
    console.log("ERROR:", error)
    res.status(500).json({
      status: false,
      message: error.message
    })
  }
}

module.exports = { register, login }