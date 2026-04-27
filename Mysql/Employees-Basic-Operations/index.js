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
    port: 3306
})

con.connect((error) => {

    if (error) {
        console.log('Error while connecting to database !!')
        return
    }

    console.log('Database connected !!')

})

server.post('/add-employee', (req, res) => {

    const { empId, empName, department, salary } = req.body

    if (!empId || !empName || !department || !salary) {
        return res.json({
            status: false,
            message: 'All fields are required !!'
        })
    }

    const sql = `
        INSERT INTO employees
        (empId, empName, department, salary)
        VALUES (?,?,?,?)
    `

    const data = [empId, empName, department, salary]

    con.query(sql, data, (error, result) => {

        if (error) {
            return res.json({
                status: false,
                message: error.message
            })
        }

        res.json({
            status: true,
            message: 'Employee added successfully !!'
        })

    })

})

server.get('/get-employees', (req, res) => {

    const sql = "SELECT * FROM employees"

    con.query(sql, (error, result) => {

        if (error) {
            return res.json({
                status: false,
                message: error.message
            })
        }

        res.json({
            status: true,
            data: result
        })

    })

})

server.delete('/delete-employee/:empId', (req, res) => {

    const empId = req.params.empId

    const sql = "DELETE FROM employees WHERE empId = ?"

    con.query(sql, [empId], (error, result) => {

        if (error) {
            return res.json({
                status: false,
                message: error.message
            })
        }

        res.json({
            status: true,
            message: 'Employee deleted successfully !!'
        })

    })

})


server.put('/update-employee/:empId', (req, res) => {

    const empId = req.params.empId

    const { empName, department, salary } = req.body

    const sql = `
        UPDATE employees
        SET empName = ?, department = ?, salary = ?
        WHERE empId = ?
    `

    const data = [empName, department, salary, empId]

    con.query(sql, data, (error, result) => {

        if (error) {
            return res.json({
                status: false,
                message: error.message
            })
        }

        res.json({
            status: true,
            message: 'Employee updated successfully !!'
        })

    })

})

server.listen(6300, () => {

    console.log('Server started on port 6300')

})
/* 
POST http://localhost:6300/add-employee
GET http://localhost:6300/get-employees
DELETE http://localhost:6300/delete-employee/101
PUT http://localhost:6300/update-employee/101
*/