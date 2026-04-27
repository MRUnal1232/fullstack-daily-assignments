const express = require('express')
const cors = require('cors')

const userRoute = require('./routes/userRoute')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', userRoute)

app.listen(6300,()=>{
console.log("Server running on port 8055")
})