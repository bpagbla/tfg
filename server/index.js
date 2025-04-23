const express = require('express')
const app = express()
const cors = require('cors');
const conexion = require('../DB/db');

app.use(cors());
app.use(express.json());


//sacar todos los usuarios
app.get("/usuarios", (req, res) => {
  const sql = 'SELECT * FROM usuario'; 

  conexion.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
      return;
    }

    res.json(results); // Envía los datos al cliente
  });
});

//nuevo usuario
app.post("/usuarios", (req, res) => {
  const { email, nick, role, nombre, apellidos, password } = req.body;

  const sql = `
    INSERT INTO usuario (EMAIL, NICK, ROLE, NOMBRE, APELLIDOS, PASSWORD)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [email, nick, role, nombre, apellidos, password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      res.status(500).json({ error: 'Error al insertar en la base de datos' });
      return;
    }

    res.status(201).json({ mensaje: 'Usuario creado correctamente', id: result.insertId });
  });
});



app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
})

