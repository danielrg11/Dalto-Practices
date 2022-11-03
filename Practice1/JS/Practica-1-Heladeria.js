// Datos Disponibles.
// Availabe Data.
let  tipoDeElado = [
         {  name: 'Agua', price : 0.6},
         {  name: 'Crema', price : 1},
         {  name: 'Heladix', price : 1.6},
         {  name: 'Heladovich', price : 1.7},
         {  name: 'Helardo', price : 1.8},
         {  name: 'Confites', price : 2.9},
         {  name: 'Pote 1/4', price : 2.9}];

dineroDeUsuario = prompt('Cuanto dinero tienes?')

// Se Utiliza la funcion map para recorrer el array de objetos y extraer valores especificos en un nuevo array.
// Using the map function to iterate between objects in the array to extract specific values and append it to a new array.
let nombres = tipoDeElado.map((a) => a['name']); 
let precios = tipoDeElado.map((a) => a['price']);
let newArray = [];

// Se recorre el array precios y agrega los elementos encontrados a un nuevo array.
// Iterating inside array "precios" and appending the found elements to a new array.
for( let i = 0 ; i < precios.length ; i++){
    if(dineroDeUsuario >= precios[i]){
        newArray.push(precios[i]);
    }
}

// Se utiliza la funcion max para encontrar el valor mas grande dentro del nuevo array.
// Using the max function to find the biggest value inside the new array.
let heladoMasCaro = Math.max.apply(null, newArray);
let heladosMasCaros = [];

// Si heladoMasCaro es igual al precio de uno o mas helados en tipoDeElado, se agregan los nombres a un nuevo array.
// If "heladoMasCaro" is equal to the price of one or more "helados" inside "tipoDeElado", we're going to append the name in a new array.
for ( let i = 0; i < precios.length; i++){
        if(heladoMasCaro == precios[i]){
          heladosMasCaros.push(nombres[i]) 
        }
    }

// Muestra en pantalla el nombre de los helados mas caros separados por (,).
// It shows the name of the most expensive "helados" split by a comma.
document.write(`Te Recomiendo: <b>${heladosMasCaros.join(', ')}</b> <br>`); 
vuelto = dineroDeUsuario - heladoMasCaro

// Muestra en pantalla el vuelto redondeado y su cantidad de decimales limitadas por la funcion round.
// It shows the change return rounded by the function round and limited by the decimals.
document.write(`\n Su vuelto es de: <b>$${Math.round((vuelto + Number.EPSILON)*100)/100}</b>`)
