const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const requireDir = require('require-dir')
// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors()); // ele faz com que seja possível acessar o backend por outros sem ser local host e insomnia

//Iniciando o DB
//mongoose.connect('mongodb://user@password')
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
     {useNewUrlParser: true}
     );
//     require('./src/models/Product');
requireDir('./src/models/');

//Rotas

app.use('/api', require('./src/routes'));

app.listen(3001); 