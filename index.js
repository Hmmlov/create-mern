const express = require('express');
require('dotenv').config()
const { dbConnection } = require('./database/config');
const cors = require('cors');

// Crear el servidor de express

const app = express();

// Base de datos

dbConnection();

// CORDS

app.use(cors() )

// Directorio Público

app.use( express.static('public') ) //use conocido como un middleware

// Lectura y prseo del body *Postman
app.use(express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );

// Todo: auth// crear, login, renew

// Todo: CRUD: Eventos

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
