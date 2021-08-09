const argv = require('yargs')
    .option('n',{
        alias: 'num',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        describe: 'Es el final de la tabla de multiplicar'
    })
    .check((argv, options)=>{
        if(isNaN(argv.n)){
            throw 'La base debe ser un numero '
        }
        return true;
    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar'
    })
    .argv;

module.exports = argv;