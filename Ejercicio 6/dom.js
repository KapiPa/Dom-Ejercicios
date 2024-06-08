/*Se te ha encomendado la tarea de desarrollar una pequeña aplicación web en JavaScript 
que permita a los usuarios crear y mostrar su propias lista de tareas.

Cada tarea debe tener un botón para eliminarla también al ser creada.
Utilizar un input para recibir la tarea y un botón para Agregar que la añada a la lista actual.*/

//Contenedor .muestra va a cargar una tabla con su lista de tareas con el tr y el td mas el boton de eliminar
var juan=0;
var titulo = [], contenido = [], fecha = [];
const form = document.getElementById('formulario').addEventListener('submit', function(e){
    const a = document.getElementById('titulo').value;
    const b = document.getElementById('contenido').value;
    const c = document.getElementById('entrega').value;
    e.preventDefault();
    crearNuevaTarea(a, b, c, '.body');
})

function crearNuevaTarea(titu, conte, fe, contasig){

    titulo.push(titu);
    contenido.push(conte);
    fecha.push(fe);
    const tbody = document.querySelector(contasig);
    const tr = document.createElement('tr');    
    tr.innerHTML = `<td>${titu}</td><td>${conte}</td><td>${fe}</td>
    <input type="button" value="Elminiar" id="${juan}" onclick="borrar(${juan})">`;
    tbody.appendChild(tr);
    juan++;
}

function reestructurar(){
    const table = document.querySelector('.muestra');
    const Ctbody = document.createElement('tbody');
    Ctbody.classList.add('body');
    table.appendChild(Ctbody);
    const tbody = document.querySelector('.body')
    for(let i=0; i<titulo.length; i++){
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${titulo[i]}</td><td>${contenido[i]}</td><td>${fecha[i]}</td>
        <input type="button" value="Elminiar" id="${i}" onclick="borrar(${i})">`;
        tbody.appendChild(tr);
    }
}

function borrar(parm1){
    const tbody = document.querySelector('.body');
    tbody.remove();
    titulo.pop(parm1);
    contenido.pop(parm1);
    fecha.pop(parm1);
    reestructurar();
}
