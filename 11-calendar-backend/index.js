const express = require('express');
require('dotenv').config();

console.log();

const app = express()


//*Rutas
app.use( express.static('public')); 


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