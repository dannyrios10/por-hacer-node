let descripcion = {
    demand: true,
    alias: 'd'
};
let completado = {
    demand: true,
    alias: 'c',
    default: true
};
    
const argv = require('yargs')
                     .command('crear', 'Crea un elemento por hacer', {
                        descripcion,
                     })
                     .command('actualizar', 'Actualiza el estado completado de una tarea', {
                        descripcion,
                        completado
                     })
                     .command('borrar', 'Borra una tarea', {
                        descripcion
                     })
                     .command('completadas', 'Hace una lista de las cosas por hacer completadas', {
                        completado
                     })
                     .help()
                     .argv;

module.exports = {
    argv,
}