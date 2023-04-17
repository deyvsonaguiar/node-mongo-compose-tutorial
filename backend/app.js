const express = require('express')
const restful = require('node-restful')
server = express()
const  mongoose = restful.mongoose

//database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//testando
server.get('/', (req, res, next) => res.send("Backend"))
server.listen(3000)
