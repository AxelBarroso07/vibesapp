const express = require('express');
const cors = require('cors');
const { vibesgoRoutes } = require('./routes');
const { mySQLRepository } = require('./repository/mysqlRepository');

const app = express();
const port = process.env.PORT || 3000;


/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());


/**
 * Routes
 */
app.use(vibesgoRoutes(mySQLRepository))
  


app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});

