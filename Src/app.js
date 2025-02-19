// Se importa el módulo 'express', que es un framework para crear servidores en Node.js.
const express = require('express'); 
//Importar Awilix
const container = require('./container'); 

// Se crea una instancia de la aplicación Express.
const app = express(); 

// Se configura middleware para permitir que el servidor pueda interpretar JSON en las solicitudes.
// Un middleware en Express es una función que tiene acceso al objeto de la solicitud (req), al objeto de la respuesta (res) y a la siguiente función en la cadena de middleware (next).
app.use(express.json()); 

// Middleware para inyectar el contenedor en cada request
app.use((req, res, next) => {
    req.container = container.createScope();
    next();
});

// Se define una ruta GET en la raíz ('/') del servidor.
// Cuando un usuario accede a esta ruta, se ejecuta la función callback.
app.get('/', (req, res) => {

    // Se envía una respuesta al cliente con el texto 'Hello world'.
    res.send('Hello world'); 
});

// Ruta que usa Awilix para obtener un usuario
app.get('/user/:id', (req, res) => {
    const userService = req.container.resolve('userService');
    const user = userService.getUser(req.params.id);
    res.json(user);
});

//Get para sumar dos números
app.get('/sum', (req, res) => {
    const { num1, num2 } = req.query;

    // Convertir los valores a números
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Validar si los valores son números
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: "Los parámetros deben ser números válidos" });
    }

    const resultado = n1 + n2;
    
    res.json({ resultado });
});


// Ruta POST para registrar los datos del usuario
app.post('/register', (req, res) => {
    const { email, password } = req.body;
    
    // Validar que se envíen los datos necesarios
    if (!email || !password) {
        return res.status(400).json({ error: "Se requieren usuario y contraseña" });
    }

    // Respuesta 
    res.json({
        message: "Usuario registrado con éxito",
        usuario: {
            email,
            password
        }
    });
});

// Se exporta la instancia de la aplicación 'app' para que pueda ser utilizada en otros archivos.
module.exports = app; 