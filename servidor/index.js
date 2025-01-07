require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin : process.env.ORIGIN,
  })
);
app.use('/plantas', express.static('public/plantas'));

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Endpoint para consultar /Plantas
app.get('/plantas', (req, res) => {
  const query = 'SELECT * FROM vista_plantas'; // Query

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Retorna JSON
  });
});

// Endpoint para consultar /plantas/?
app.get('/plantas/:id_planta', (req, res) => {
  const { id_planta } = req.params;
  const query = 'SELECT * FROM vista_plantas WHERE id_planta = ?'; // Ajusta la consulta según tu base de datos

  db.query(query, [id_planta], (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Planta no encontrada');
    } else {
      res.json(results[0]); // Retorna solo el primer resultado
    }
  });
});

// Endpoint para consultar /base-de-datos
app.get('/base-de-datos', (req, res) => {
  const query = 'SELECT * FROM plantas_novohispanas.vista_general;';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Retorna JSON
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://${process.env.DB_HOST}:${PORT}`);
});