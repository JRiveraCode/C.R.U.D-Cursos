const express = require('express');

const {matematicas} = require('../datos/cursos.js').infoCursos;

//Routers 
const routerMatematicas = express.Router();

//middleware 
routerMatematicas.use(express.json());

// API cursos de matematica 
routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas));
});

// Ruta para filtrar cursos de matemáticas por tema
routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema === tema);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.send(JSON.stringify(resultados));
});


// Ruta para filtrar cursos de matemáticas por tema y nivel
routerMatematicas.get('/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;

    const resultados = matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema} de nivel ${nivel}`);
    }
     

//Parametro query nos sirve para hacer busquedas mas especificas. 
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});

routerMatematicas.post('/', (req, res) => {
    let cursoNuevo = req.body;
    matematicas.push(cursoNuevo);
    res.send(JSON.stringify(matematicas));
});

routerMatematicas.put('/:id', (req, res) => { 
    const id = req.params.id; 
    const cursoActualizado = req.body; 

    

const indice = matematicas.findIndex(curso => curso.id == id);
    if(indice >= 0){
        matematicas[indice] = cursoActualizado;
         }
 res.send(JSON.stringify(matematicas));
});

//PATCH nos sirve para modificar un recurso 

routerMatematicas.patch('/:id', (req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = matematicas.findIndex(curso => curso.id == id); 
    if(indice >= 0){
        const cursoAModificar = matematicas[indice];
        Object.assign(cursoAModificar, infoActualizada); 
    }
    res.send(JSON.stringify(matematicas));
});


routerMatematicas.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = matematicas.findIndex(curso => curso.id == id);

    if(indice >= 0){
        matematicas.splice(indice, 1); 
    }
    res.send(JSON.stringify(matematicas));
});

module.exports = routerMatematicas;