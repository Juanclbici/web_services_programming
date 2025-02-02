// Se importa el módulo 'express', que es un framework para crear servidores en Node.js.
const express = require('express'); 

// Se crea una instancia de la aplicación Express.
const app = express(); 

// Se configura middleware para permitir que el servidor pueda interpretar JSON en las solicitudes.
// Un middleware en Express es una función que tiene acceso al objeto de la solicitud (req), al objeto de la respuesta (res) y a la siguiente función en la cadena de middleware (next).
app.use(express.json()); 

// Se define una ruta GET en la raíz ('/') del servidor.
// Cuando un usuario accede a esta ruta, se ejecuta la función callback.
app.get('/', (req, res) => { 

    // Se envía una respuesta al cliente con el texto 'Hello world'.
    res.send('Hello world'); 
});

// Se exporta la instancia de la aplicación 'app' para que pueda ser utilizada en otros archivos.
module.exports = app; 