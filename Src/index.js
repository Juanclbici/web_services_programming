// Se define la constante 'port' y se le asigna el número de puerto en el que el servidor escuchará las solicitudes.
const port = 8080; 

// Se importa el módulo 'app' desde el archivo 'app.js'
const app = require('./app'); 

// Se define una función autoejecutable asíncrona.
(async () => { 

    // Se imprime un mensaje en la consola indicando que el servidor está iniciando.
    console.log('Starting server...'); 

    // Se inicia el servidor en el puerto definido previamente.
    app.listen(port, () => { 

        // Cuando el servidor comienza a escuchar, se imprime un mensaje en la consola con el número de puerto.
        console.log(`Server is running on port ${port}`); 
    });

})();
