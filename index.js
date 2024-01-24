//const express = require('express');  //Version de CommandJS
import express from "express"; //Verison de import
import router from "./routes/index.js";
import db from "./config/db.js";




const app = express();

//Conectar la DDBB

db.authenticate()
    .then( () => console.log('DDBB conected...!'))
    .catch(error => console.log(error) )

//Definir puerto

const port = process.env.PORT ||4000;

//Habilitar PUG

app.set('view engine', 'pug');

//Crear el Middlewere. Obtener el year actual

app.use( (req, res, next) => {
    
    const year = new Date();
    
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitios = 'Agencia de Viajes';
    next()

});

//Agregar body parser para leer los datos del formulario
app.use( express.urlencoded({extended: true}));

//Definir la carpeta pública
app.use(express.static('public'));

app.listen( port,  () =>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
});

//Agregar router
app.use('/', router);