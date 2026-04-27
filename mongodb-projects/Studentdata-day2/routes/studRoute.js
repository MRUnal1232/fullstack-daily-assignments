const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

router.post('/add-student', studentController.insertUser)
router.get('/get-students', studentController.getUsers)
router.put('/update-student/:id', studentController.updateUser)
router.delete('/delete-student/:id', studentController.deleteUser)

module.exports = router