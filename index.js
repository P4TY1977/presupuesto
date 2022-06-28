const express = require('express')
const bodyParser = require ('body-parser')
const db = require('./database')
const app = express()
const port = process.env.PORT || 3000 //Si no hay una variable de entorno definida se especifica 3000
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/*app.get('/hola/:name',(req, res)=>{
    res.send({message:`Hola ${req.params.name}!`})
})*/

app.get('/presupuesto/presupuestoInicial', (req, res)=>{
    res.status(200).send({message: 'Forma de registro de presupuesto máximo asignado'})
})

app.post('/presupuesto/presupuestoInicial', (req, res)=>{
    console.log(req.body)
    res.status(200).send({message: 'Se registró presupuesto máximo asignado'})
})

app.put('/presupuesto/presupuestoInicial', (req, res)=>{
    console.log(req.body)
    res.status(200).send({message: 'Se actualizó presupuesto máximo asignado'})
})

app.get('/presupuesto/planeacionPresupuestal', (req, res)=>{
    res.status(200).send({message: 'Se pintan las formas para actualizar monto máximo y registrar proyecto, se lee listado de proyectos', proyectos:[]})
})

app.post('/presupuesto/registrarProyecto', (req, res)=>{
    console.log(req.body)
    res.status(200).send({message: 'Se registró un proyecto presupuestal'})
})

app.put('/presupuesto/editarMontoProyecto/:id', (req, res)=>{
    console.log(req.body)
    res.status(200).send({message: `Se actualizó el monto del proyecto ${req.params.id}`})
})

app.put('/presupuesto/desactivarProyecto/:id', (req, res)=>{
    console.log(req.body)
    res.status(200).send({message: `Se desactivó el proyecto ${req.params.id}`})
})
app.get('/presupuesto/emailConclusionPresupuestal', (req, res)=>{
    res.status(200).send({message: 'Se muestra mensaje y botón para enviar correo'})
})

app.get('/presupuesto/avisos', (req, res)=>{
    res.status(200).send({avisos: []})
})

app.get('/presupuesto/registrarAviso', (req, res)=>{    
    res.status(200).send({message: 'Se muestra la forma para registrar un aviso'})
})

app.post('/presupuesto/registrarAviso', (req, res)=>{
    console.log(req.body)
    res.status(200).send({message: 'Se registró un aviso'})
})
app.listen(port, ()=>{
    console.log(`API REST corriendo en http://localhost:${port}`)
})