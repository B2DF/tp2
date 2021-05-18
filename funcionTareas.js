const fs = require('fs');
const tareasJson = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));



module.exports = {

    agregarTarea : function (titulo, estado = 'pendiente') {

        let nuevaTarea = {
            titulo, 
            estado
        }; 
        let tareas = tareasJson;
        tareas.push(nuevaTarea);
        
        this.escribirJSON(tareas);
    },

    listarTareas : function (){
        tareasJson.forEach(element => console.log(element));
    },

    escribirJSON : function(){
        fs.writeFileSync('./tareas.json', JSON.stringify(tareasJson, null, 2), 'utf-8');
    },
   
    leerPorEstado : function(elemento){
        let soloTareas = tareasJson.filter(tarea => tarea.estado === elemento || tarea.titulo.includes(elemento));
       
        console.log(soloTareas);
    }

}







/*module.exports ={
    leerJson : () => JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8')),
    agregarTarea : (titulo, estado) => {//con los parametros creo una nueva tarea
        let nuevaTarea = {
            titulo : titulo,
            estado : estado
        }
        let tareas = this.leerJson();//leo el array
        tareas.push(nuevaTarea)//agrego una nueva tarea
    }
}*/
