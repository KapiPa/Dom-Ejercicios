/* En base a este array, crear funciones que por medio de un input text muestre solo las frutas que contengan/comiencen
con las letras ingresadas. Las funciones deben ser*/
const frutas = [
    { nombre: 'Manzana', imagen: 'https://via.placeholder.com/50x50?text=Manzana&#39'},
    { nombre: 'Banana', imagen: 'https://via.placeholder.com/50x50?text=Banana&#39'},
    { nombre: 'Cereza', imagen: 'https://via.placeholder.com/50x50?text=Cereza&#39'},
    { nombre: 'Durazno', imagen: 'https://via.placeholder.com/50x50?text=Durazno&#39'},
    { nombre: 'Frutilla', imagen: 'https://via.placeholder.com/50x50?text=Frutilla&#39'},
    { nombre: 'Guayaba', imagen: 'https://via.placeholder.com/50x50?text=Guayaba&#39'},
    { nombre: 'Higo', imagen: 'https://via.placeholder.com/50x50?text=Higo&#39'},
    { nombre: 'Kiwi', imagen: 'https://via.placeholder.com/50x50?text=Kiwi&#39'},
    { nombre: 'Limón', imagen: 'https://via.placeholder.com/50x50?text=Limón'},
    { nombre: 'Mango', imagen: 'https://via.placeholder.com/50x50?text=Mango&#39'}
];
const frutas2 = [];
function mostrarIGM(){
    const div = document.getElementById('principal');
    for(let i=0; i<frutas.length; i++){
        const img = document.createElement('img');
        const p = document.createElement('p');
        img.setAttribute('src', frutas[i].imagen);
        p.innerHTML = frutas[i].nombre;
        div.append(img);
        div.append(p);
    }
}
mostrarIGM();
function comparar(inp){
    let letraConf = false;
    
    for(let i=0; i<frutas.length; i++){
        let a = frutas[i].nombre;
        let cont = 0, otrCont = 0;
        let tamInp = inp.length;
        do{
            if(inp == a[cont]){
                letraConf = true;
            }
            else{
                letraConf = false;
            }
            cont+=tamInp
        }while(!letraConf || cont == a.length);
        if(letraConf){
            frutas2[otrCont] = 
            otrCont++;
        }
    }
}
function mostrarComp(frutas2){

}
const input = document.getElementById('entrada').addEventListener('input', function(e){
    const inp = document.getElementById('entrada').value;
    if(inp==''){
        mostrarIGM();
    }
    else{
        comparar(inp);
    }
    e.preventDefault();
})

//funcion que le entra el input que se hace y procesa caracter por caracter del frutas[i].nombre