const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');


// Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);


// rutas
app.get('/', (req, res) => {
    res.send("Bienvenidos a mi primer servidor con Express. Cursos");
});

// API cursos
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req,res) => {
res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/matematicas', (req,res) => {
res.send(JSON.stringify(infoCursos.matematicas));
});



// asignar un puerto
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});