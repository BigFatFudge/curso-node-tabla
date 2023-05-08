
// archivo inicial que lanza todo el proyecto de node

const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors');

console.clear();

// const base = 5;

   crearArchivo(argv.b, argv.l, argv.h)
   .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
   .catch(err => console.log(err))
