require('dotenv').config(); // Para leer el archivo .env

const mysql = require('mysql2'); // O mysql si usas esa lib

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Puedes omitir si usas 3306
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
