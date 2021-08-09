const {crearArchivo} = require('./helpers/multiplicar');
const argv = require(('./conf/yargs'))
const colors = require('colors');
console.clear();


crearArchivo(argv.n, argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'.red))
    .catch(err => console.log(err));



// const num = 14;
// const [ , , arg3 = 'num=5'] = process.argv;
// const [, num] = arg3.split('=');
// console.log(num);