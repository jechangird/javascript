//crear una funcion recursiva que basado en un array de notas, te muestre el promedio

let notas =  [5, 10, 5.8, 8.4, 9.2, 3.3];
let tamano = notas.length

function promedio (arreglo=[], i=0){
    if (arreglo[i] < tamano){
        
        console.log(arreglo[i]);
        promedio(arreglo, i-1);
    }  
}
promedio(notas, tamano)


