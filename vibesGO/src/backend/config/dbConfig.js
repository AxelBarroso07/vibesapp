const mysql = require('mysql2');


module.exports = () => {
    const db = mysql.createConnection({
        host: '192.168.0.4',
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