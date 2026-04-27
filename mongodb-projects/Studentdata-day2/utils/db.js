const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/student')
        console.log('Database connected successfully!!!')
    } catch (error) {
        console.error('Database connection failed!!!')
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB