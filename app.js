const {argv} = require('./config/yargs');
const colors = require('colors');

const {crear, porHacer, actualizar, borrar} = require('./por-hacer/por-hacer');


const comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Creando lista por hacer');
        console.log(crear(argv.descripcion));
        break;
    case 'listar':
        
        let listado =  porHacer();


        console.log('====Tareas por Hacer ====='.green);

        for(let tarea of listado){

            console.log('=============='.blue);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
        }

        console.log('========================'.green);

        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        const borrado = borrar(argv.descripcion);
        if(borrado === true){
            console.log('Se ha borrado con exito la tarea', argv.descripcion.red);
        }
        break;

    default:
        console.log('Comando no reconocido');
        break;
}