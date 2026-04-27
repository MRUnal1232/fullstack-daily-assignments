const express = require('express')
const userController = require('../controller/userController')

const router = express.Router()

router.post('/signup', userController.onSignup)

router.post('/login', userController.onLogin)

router.get('/get-user/:email', userController.getUserDetails)

module.exports = router