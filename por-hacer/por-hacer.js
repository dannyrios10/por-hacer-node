
const fs = require('fs');

let cosasPorHacer = [];

let cargarbd = () =>{

    try {
        cosasPorHacer = require('../db/data.json');
    } catch (error) {
        cosasPorHacer = [];
    }
}

const guardarDB = () =>{
    let data = JSON.stringify(cosasPorHacer);

    fs.writeFile(`db/data.json`, data, (err) =>{
        if(err) reject(err);
        console.log('El archivo se ha guardado con exito');
    });
}

let crear = (descripcion) =>{

    cargarbd();

    let porHacer = {
        descripcion,
        completado: false
    }

    cosasPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

let porHacer = () =>{
    cargarbd();
    return cosasPorHacer
}

const actualizar = (descripcion, completado = true) =>{
    cargarbd();

    let index = cosasPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    })

    if(index >= 0){
        cosasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarbd();

    let index = cosasPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    })

    if(index >= 0){
        cosasPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }else{
        console.log('No existe esa tarea en la lista');
        return false;
    }

}



module.exports = {
    crear,
    porHacer,
    actualizar,
    borrar
}