const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mrunalthamake9_db_user:oj0mffjlY7nUu9ir%40register-login.x6dozk1.mongodb.net/')
        console.log('Database connected successfully!!!')
    } catch (error) {
        console.error('Database connection failed!!!')
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB