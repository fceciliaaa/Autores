const express = require('express');
const app = express();
const cors = require('cors');
const routerAutores = require('./routes/autor.routes')

require('./config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', routerAutores);

app.listen(8080, () => {
  console.log('El servidor ya está encendido en el puerto 8080.');
}); 