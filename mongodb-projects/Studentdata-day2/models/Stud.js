const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  rollNo: { type: Number, required: true, unique: true },
  fullName: { type: String, required: true },
  department: { type: String, required: true },
  CGPA: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  address: { type: String },
  admissionYear: { type: Number, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)