const { dbConnection } = require('./database/config');
const cors = require('cors');
const express = require('express');
require('dotenv').config();

//*Creando server express
const app = express()

//* Base de datos
dbConnection();

//* CORS
app.use( cors() );

//*Rutas
//* Directorio público
app.use( express.static('public')); 

//*Lectura y parseo del body
app.use(express.json());

//*Rutas
//* auth { crear, login, renew }
app.use('/api/auth',require('./routes/auth'));

//TODO CRUD Eventos


//  app.get('/', (req, res) => {
//   res.json({
//     'ok':true
//   });    
// })

//  app.get('/h', (req, res) => {
//   res.json({
//     'ok':true,
//     "value":'h'
//   });    
// })

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
} );