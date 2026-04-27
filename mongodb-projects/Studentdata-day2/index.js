const express = require('express')
const cors = require('cors')

const connectDB = require('./utils/db')
const userRoute = require('./routes/userRoute')
const studentRoute = require('./routes/studRoute')

const server = express()

server.use(cors())
server.use(express.json())


server.use('/api', userRoute)
server.use('/student', studentRoute)

connectDB()

server.listen(5500, () => {
  console.log('Server started listening on port 5500')
})