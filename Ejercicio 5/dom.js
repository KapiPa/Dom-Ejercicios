/*
Se te ha encomendado la tarea de escribir un programa en JavaScript que muestre los números del 
1 al 100 en una lista ordenada ("ol") en una página HTML. Sin embargo, los números múltiplos de 3 deben 
mostrarse en rojo, los números múltiplos de 5 deben mostrarse en azul y los números múltiplos de 3 y 5 
(es decir, múltiplos de 15) deben mostrarse en verde.
*/
const ol = document.querySelector('.list');

for(let i=1; i<=100; i++){
    const li = document.createElement('li');
    if(i%3==0 && i%5==0){
        li.innerHTML = `<p style="color:green;">${i}</p>`
    }
    else if(i%5==0){
        //numero en azul
        li.innerHTML = `<p style="color:blue;">${i}</p>`
    }
    else if(i%3==0){
        li.innerHTML = `<p style="color:red;">${i}</p>`
    }
    else{
        li.innerHTML = `<p>${i}</p>`
    }
    ol.appendChild(li);
}