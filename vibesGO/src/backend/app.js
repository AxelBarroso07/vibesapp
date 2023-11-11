const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { getLatitudeAndLongitude } = require('./helper/getLatitudeAndLongitude');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: '192.168.0.14',
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

// Middleware para analizar las solicitudes JSON
app.use(express.json());

  // Ruta para agregar un nuevo usuario
  app.post('/api/usuarios', async (req, res) => {
    const { nombre, contrasenia, email, calle, numeroDeCalle , apellido, ciudad, provincia} = req.body;

    const {latitude, longitude} = await getLatitudeAndLongitude(calle, numeroDeCalle, ciudad, provincia)

    const sql = 'INSERT INTO usuarios SET nombre = ?, contrasenia = ?, email = ?, apellido = ?, calle = ?, latitude = ?, longitude = ?, numeroDeCalle = ?, city = ?, province = ?';
    db.query(sql, [nombre, contrasenia, email, apellido, calle, latitude, longitude, numeroDeCalle, ciudad, provincia], (err) => {
      console.log("el error ", err)
      if (err) {
        throw err;
      }
      res.json({ message: 'Usuario actualizado exitosamente' });
    });
  });

  

  
  // Ruta para eliminar un usuario
  app.delete('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        throw err;
      }
      res.json({ message: 'Usuario eliminado exitosamente', id });
    });
  });


  //INICIA PARTE DE NEGOCIOS

  // Ruta para agregar un nuevo negocio
app.post('/api/negocios', async (req, res) => {
  const { nombreNegocio, calle, numeroDeCalle, city, province } = req.body;

  const { latitude, longitude } = await getLatitudeAndLongitude(calle, numeroDeCalle, city, province);

  const sql = 'INSERT INTO negocios SET nombreNegocio = ?, calle = ?, numeroDeCalle = ?, city = ?, province = ?, latitude = ?, longitude = ?';
  db.query(sql, [nombreNegocio, calle, numeroDeCalle, city, province, latitude, longitude], (err) => {
    if (err) {
      throw err;
    }
    res.json({ message: 'Negocio agregado exitosamente' });
  });
});



// Ruta para eliminar un negocio
app.delete('/api/negocios/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM negocios WHERE idNegocio = ?';
  db.query(sql, [id], (err) => {
    if (err) {
      throw err;
    }
    res.json({ message: 'Negocio eliminado exitosamente', id });
  });
});

  
  


  //INICIA PARTE DE PRODUCTOS
  app.get('/api/productos', (req, res) => {
    const { categoria } = req.query;
  
    // Lógica para filtrar los productos en función de la categoría (nombre)
    const sql = 'SELECT * FROM productos WHERE nombre LIKE ?';
    db.query(sql, [`%${categoria}%`], (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });
  



// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});

