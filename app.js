const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');

//Routers
//Para incluir el route de programacion en la app principal
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

//Para incluir el route de matematicas en la app principal 
const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);


//Routing (enrutamiento) Ruta principal (home) del servidor
app.get('/', (req, res) => {
    res.send('Bienvenidos a mi primer servidor. ');
});


// Ruta que devuelve todos los cursos (programación y matemáticas)
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});


// Define el puerto del servidor
const PUERTO = process.env.PORT || 3000;


// Inicia el servidor y escucha las peticiones en el puerto definido
app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}`);
}); 

