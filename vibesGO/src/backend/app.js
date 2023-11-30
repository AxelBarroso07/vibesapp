const express = require('express');
const cors = require('cors');
const { vibesgoRoutes } = require('./routes');
const dbConfig = require('./config/dbConfig');
const { MySQLRepository } = require('./repository/mysqlRepository');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
// Configura la conexión a la base de datos MySQL


// Middleware para analizar las solicitudes JSON

const db = dbConfig()
const mySQLRepository = new MySQLRepository(db)

app.use(express.json());

app.use(vibesgoRoutes(mySQLRepository))
  



// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});

