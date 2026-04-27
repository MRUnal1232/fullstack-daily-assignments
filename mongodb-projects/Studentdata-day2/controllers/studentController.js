const Student = require('../models/Stud')


exports.insertUser = async (req, res) => {
  try {
    const { rollNo, fullName, department, CGPA } = req.body

    await Student.create({
      rollNo,
      fullName,
      department,
      CGPA,
      email,
      phone,
      dateOfBirth,
      gender,
      address,
      admissionYear
    })

    res.json({ status: true, message: 'Student added successfully !!' })

  } catch (err) {
    console.log(err)
    res.json({ status: false, message: 'Internal server error !!' })
  }
}



exports.getUsers = async (req, res) => {
  try {
    const students = await Student.find()

    res.json({ status: true, data: students })

  } catch (err) {
    console.log(err)
    res.json({ status: false, message: 'Internal server error !!' })
  }
}


exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id

    await Student.findByIdAndUpdate(id, req.body, { new: true })

    res.json({ status: true, message: 'Student updated successfully !!' })

  } catch (err) {
    console.log(err)
    res.json({ status: false, message: 'Internal server error !!' })
  }
}


// ➤ DELETE
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id

    await Student.findByIdAndDelete(id)

    res.json({ status: true, message: 'Student deleted successfully !!' })

  } catch (err) {
    console.log(err)
    res.json({ status: false, message: 'Internal server error !!' })
  }
}