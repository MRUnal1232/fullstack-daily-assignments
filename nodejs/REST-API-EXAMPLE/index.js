const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const server = express()
server.use(cors())
server.use(bodyParser.json())


server.get('/get-msg1', (req, res) => {
    res.send('Welcome to Backend Development !!')
})

server.get('/get-msg2', (req, res) => {
    res.send('<h2>This is second static GET API</h2>')
})

server.get('/get-msg3', (req, res) => {
    res.send('Learning Express JS is easy and interesting !!')
})
server.get('/get-student', (req, res) => {
    const student = {
        fullName: 'Mrunal Thamake',
        department: 'CSE',
        mobileNo: '9876543210',
        email: 'mrunal@gmail.com'
    }

    res.json(student)
})


server.get('/get-employee', (req, res) => {
    const employee = {
        empName: 'Ojasvi Garde',
        designation: 'Developer',
        salary: 50000,
        department: 'IT'
    }

    res.json(employee)
})


server.get('/get-product', (req, res) => {
    const product = {
        productName: 'Watch',
        brand: 'Fastrack',
        price: 65000,
        quantity: 10
    }

    res.json(product)
})
server.post('/add-emp', (req, res) => {

    const { empName, department, salary } = req.body

    if (empName.length < 3) {
        res.json({ status: false, message: 'Invalid Employee Name !!' })
    }
    else if (!['IT', 'HR', 'Sales', 'Admin'].includes(department)) {
        res.json({ status: false, message: 'Invalid Department !!' })
    }
    else if (salary < 10000) {
        res.json({ status: false, message: 'Salary must be greater than 10000 !!' })
    }
    else {
        res.json({ status: true, message: 'Employee added successfully !!' })
    }

})

server.post('/add-product', (req, res) => {

    const { productName, price, quantity } = req.body

    if (productName.length < 3) {
        res.json({ status: false, message: 'Invalid Product Name !!' })
    }
    else if (price <= 0) {
        res.json({ status: false, message: 'Invalid Price !!' })
    }
    else if (quantity <= 0) {
        res.json({ status: false, message: 'Invalid Quantity !!' })
    }
    else {
        res.json({ status: true, message: 'Product added successfully !!' })
    }

})
server.listen(6300, () => {
    console.log('Server started listening on port 6300')
})