const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://fullstack:fullstack123@fullstack.uock5ec.mongodb.net/')
        console.log('Database connected successfully!!!')
    } catch (error) {
        console.error('Database connection failed!!!')
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB