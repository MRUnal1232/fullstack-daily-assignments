const path = require('path')
const express = require('express')
const cors = require('cors')
const connectDB = require('./utils/db')
const userRoute = require('./routes/userRoute')

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', userRoute)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

connectDB().then(() => {
    app.listen(5500, () => {
        console.log('Server running on port 5500')
    })
})