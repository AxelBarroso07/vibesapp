const mysql = require('mysql2');


module.exports = () => {
    const db = mysql.createConnection({
        host: '10.0.5.30',
        user: 'root',
        password: '',
        port: 3306,
        database: 'vibesgo',
    });

    db.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('Conexión a la base de datos MySQL establecida');
    });

    return db
}