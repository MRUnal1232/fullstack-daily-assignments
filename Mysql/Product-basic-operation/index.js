const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const server = express()

server.use(cors())
server.use(express.json())

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
server.post('/add-product', (req, res) => {

    const { productId, productName, category, price } = req.body

    if (!productId || !productName || !category || !price) {
        return res.json({
            status: false,
            message: "All fields are required"
        })
    }

    const sql = `
        INSERT INTO products 
        (productId, productName, category, price)
        VALUES (?, ?, ?, ?)
    `

    con.query(sql, [productId, productName, category, price], (error, result) => {

        if (error) {
            return res.json({
                status: false,
                message: error.message
            })
        }

        res.json({
            status: true,
            message: "Product added successfully"
        })

    })

})

server.get('/get-products', (req, res) => {

    const sql = "SELECT * FROM products"

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

server.delete('/delete-product/:productId', (req, res) => {

    const productId = req.params.productId

    const sql = "DELETE FROM products WHERE productId = ?"

    con.query(sql, [productId], (error, result) => {

        if (error) {
            return res.json({
                status: false,
                message: error.message
            })
        }

        res.json({
            status: true,
            message: "Product deleted successfully"
        })

    })

})

server.put('/update-product/:productId', (req, res) => {

    const productId = req.params.productId
    const { productName, category, price } = req.body

    const sql = `
        UPDATE products 
        SET productName = ?, category = ?, price = ?
        WHERE productId = ?
    `

    con.query(sql, [productName, category, price, productId], (error, result) => {

        if (error) {
            return res.json({
                status: false,
                message: error.message
            })
        }

        res.json({
            status: true,
            message: "Product updated successfully"
        })

    })

})

server.listen(6300, () => {
    console.log("Server started on port 6300")
})
/*
POST http://localhost:6300/add-product
GET http://localhost:6300/get-products
DELETE http://localhost:6300/delete-product/104
PUT http://localhost:6300/update-product/104
*/