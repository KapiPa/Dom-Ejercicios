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
/*
const from = document.getElementById('contenido').addEventListener('submit', function(e){
    const totalLitros = litrosGastados(document.getElementById('cantkm').value, document.getElementById('consumo').value);
    const precioNaftaTotal = totalLitros*document.getElementById('precionafta').value;
    const precioViajeInd = viajeIndividual(document.getElementById('costoestadia').value, precioNaftaTotal, document.getElementById('cantidadias').value, document.getElementById('personas').value);
    const precioTotal = viajeTotal(precioViajeInd, document.getElementById('personas').value)
    e.preventDefault();
    const etiqueta = document.getElementById('contenido');
    const p = document.createElement('p');
    p.innerHTML = `El total por el viaje con estadia y consumo de litros es: $${precioTotal}<br>
    El gasto individual por persona sobre todo el viaje es: $${precioViajeInd}<br>
    El gasto de combustible total es: ${totalLitros}<br>
    El gasto por combustible es: ${precioNaftaTotal}<br>`;
    etiqueta.appendChild(p);
});
function viajeTotal(parm1, parm2){
    let total;
    total = parm1*parm2;
    return total;
}
function viajeIndividual(parm1, parm2, parm3, parm4){
    let totalU = (Number(parm1)+Number(parm2/parm4))*parm3;
    console.log(totalU+" esto es para ver si toma func viajeIndividual")
    return totalU;
}
function litrosGastados(parm1, parm2){
  let litrosT;
  litrosT = parm1/parm2;
  return litrosT;
}*/