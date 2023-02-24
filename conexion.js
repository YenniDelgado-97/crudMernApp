const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('correct conexion with mongoDb')})
objetobd.on('error', ()=>{console.log('error conexion with mongoDb')})

module.exports = mongoose

