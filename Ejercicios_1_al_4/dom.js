//Ejercicio 1 y 2
/*const datos = document.getElementById('contenido').addEventListener('submit', function(e){
    const nombre = document.getElementById('Nombre').value;
    const apellido = document.getElementById('Apellido').value;
    const edad = document.getElementById('Edad').value;
    const producto = document.getElementById('Producto').value;
    const precio = document.getElementById('Precio').value;
    const entrega = document.getElementById('Entrega').value;
    //document.write(`${nombre}   ${apellido}   ${edad}`)
    e.preventDefault();
    const documento = document.getElementById('contenido')
    const p = document.createElement('p')
    const arry = `Destinatario: ${nombre} ${apellido} <br>Edad: ${edad}<br>Producto comprado: ${producto}<br>Valor del producto: $${precio}
    <br>Fecha de entrega: ${entrega}`
    p.innerHTML = arry
    documento.appendChild(p);
});*/

//Ejercicio 3
/*const datos = document.getElementById('contenido').addEventListener('submit', function(e){
    const peso = document.getElementById('Peso').value;
    e.preventDefault();
    const documento = document.getElementById('contenido');
    const p = document.createElement('p');
    p.innerHTML = `${peso} convertidos a dolar son: ${peso/1000}`;
    documento.appendChild(p);
})*/

//Ejercicio 4
// Crear un formulario para ingresar datos de un viaje (Destino, cantidad de personas, 
// cantidad de km, precio de la nafta, consumo del auto en 
// km/l, costo de la noche de estadia por persona , cantidad de dias que desea viajar)

// Por pantalla mostrar los resultados del viaje seleccionado. Utilizar funciones para 
// cada cálculo por separado (si desean, pueden imrimir cada resultado individualmente)
const from = document.getElementById('contenido').addEventListener('submit', function(e){
    
});
//Crear las funciones de calculo para el precio del viaje total y el individual de cada parte, como 
//litros en todo el viaje y cuanto seria.



//  Recuperar datos de un formulario con JS
//Primero creamos un "escuchador de eventos"
/*const form = document.getElementById('formulario').addEventListener('submit', function(e){
 
    //Asignamos constantes a los valores que queremos "traer"
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
  
    console.log(nombre, edad);
    //Prevenimos el evento de carga
    e.preventDefault();
  
    //Seleccionamos una etiqueta del HTML
    const documento = document.querySelector('.contenido');
  //Creamos constante para "Resumir" generar parrafos
    const p = document.createElement('p');
  //Le agregamos un valor al contenido que queremos generar (en este caso un parrafo)
  p.innerHTML = nombre;
  //Le generamos un nuevo elemento al DOM 
  documento.appendChild(p);
  
  
  });*/