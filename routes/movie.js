const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema


const schemamovie = new schema({
    id: String,
    title:String,
    year:Number,
    time:Number,
    lang:Number,
    date:Number,
    country:String
})

const ModeloMovie = mongoose.model('movie',schemamovie)

module.exports = router

// ruta de prueba
// router.get('/ejemplo', (req,res) => {
//     res.end('saludo carga desde ruta ejemplo')
// })



// addmovie route

router.post('/addmovie',(req,res) =>{
    const newMovie = new ModeloMovie({
        title: req.body.title,
        year: req.body.year,
        time: req.body.time,
        lang: req.body.lang,
        date: req.body.date,
        country: req.body.country
    })
    
    newMovie.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
} )

// getmovies route

router.get('/getmovies',(req,res) =>{
    ModeloMovie.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })

})
