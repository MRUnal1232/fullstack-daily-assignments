const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

const server = express()
server.use(cors())
server.use(bodyParser.json())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mrunal@0904',
    database: 'fullstack',
    port:3306
})

con.connect((error) => {
    if (error) {
        console.log('Error while connecting to database !!')
        return
    }
    console.log('Database connected !!')
})
server.post('/add-student', (req, res) => {

    const { rollNo, fullName, department, CGPA } = req.body

    if (!rollNo || !fullName || !department || !CGPA) {
        res.json({ status: false, message: 'All fields are required !!' })
        return
    }

    const sql = 'INSERT INTO students (rollNo, fullName, department, CGPA) VALUES (?,?,?,?)'
    const data = [rollNo, fullName, department, CGPA]

    con.query(sql, data, (error, result) => {
        if (error) {
            res.json({ status: false, message: error.message })
            return
        }

        res.json({ status: true, message: 'Student added successfully !!' })
    })

})
server.get('/get-students', (req, res) => {

    const sql = 'SELECT * FROM students'

    con.query(sql, (error, result) => {
        if (error) {
            res.json({ status: false, message: error.message })
            return
        }

        res.json({ status: true, data: result })
    })

})
server.delete('/delete-student/:rollNo', (req, res) => {

    const rollNo = req.params.rollNo

    const sql = 'DELETE FROM students WHERE rollNo = ?'

    con.query(sql, [rollNo], (error, result) => {
        if (error) {
            res.json({ status: false, message: error.message })
            return
        }

        res.json({ status: true, message: 'Student deleted successfully !!' })
    })

})
server.put('/update-student/:rollNo', (req, res) => {

    const rollNo = req.params.rollNo
    const { fullName, department, CGPA } = req.body

    const sql = 'UPDATE students SET fullName = ?, department = ?, CGPA = ? WHERE rollNo = ?'

    const data = [fullName, department, CGPA, rollNo]

    con.query(sql, data, (error, result) => {
        if (error) {
            res.json({ status: false, message: error.message })
            return
        }

        res.json({ status: true, message: 'Student updated successfully !!' })
    })

})

server.listen(6300, () => {
    console.log('Server started on port 6300')
})