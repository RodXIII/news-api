const express = require('express')
const app = express();
const mongoose = require('mongoose');
const documentRouter = require('./routes/documents');

app.use(function (req, res, next) { // CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");
  next();
});

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/news-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('conectado a mongodb'))
  .catch(error => console.log('Error al conectar a MongoDB ' + error));

app.use('/', documentRouter);

app.listen(3000, () => console.log('app running on port 3000'));