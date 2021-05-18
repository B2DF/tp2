const tareasJson = require('./funcionTareas.js');
const process = require('process');

const tarea = process.argv[2]


switch (tarea){
    case 'agregar' :
        let titulo = process.argv[3];
        let estado = process.argv[4];
        tareasJson.agregarTarea(titulo, estado);
        break;
    case 'listar' :
        tareasJson.listarTareas();
        break;
    case 'filtrar' :
        tareasJson.leerPorEstado(process.argv[3]);
        break;    
    case undefined :
        console.log("Atencion - tienes que prestar atencion");
        break;
    default:
        console.log("No entiendo que quieres hacer");
                    
}


