const express = require('express');
require('dotenv').config();

const app = express()

//*Rutas
app.use( express.static('public')); 

//*Rutas
//TODO auth { crear, login, renew }

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