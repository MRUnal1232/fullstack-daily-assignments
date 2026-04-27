const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'notes_app_db'
});

db.connect((err) => {
    if (err) {
        console.error('Connection failed:', err);
        process.exit(1);
    }

    const checkTable = (tableName) => {
        return new Promise((resolve) => {
            db.query(`DESCRIBE ${tableName}`, (err, results) => {
                if (err) {
                    console.error(`Error describing ${tableName}:`, err.message);
                    resolve();
                } else {
                    console.log(`--- Schema for ${tableName} ---`);
                    results.forEach(col => {
                        console.log(`${col.Field}: ${col.Type} | Null: ${col.Null} | Key: ${col.Key} | Extra: ${col.Extra}`);
                    });
                    resolve();
                }
            });
        });
    };

    async function run() {
        await checkTable('register');
        await checkTable('notes');
        db.end();
    }

    run();
});
