const mysql = require('mysql2')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mrunal@0904',
    database: 'fullstack',
    port: 3306
})

con.connect((error) => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("Database Connected")
    }
})

module.exports = con