//Crea una función llamada contarVocales que reciba una cadena y devuelva el número de vocales que contiene.

function contarVocales(cadena, vocales){
  for(let vocal of cadena){
    if(vocales.includes(vocal)){
      contador ++;
    }
  }
  return console.log("Cantidad de vocales en la cadena: "+ cadena + "=" + contador);
    
  
}
let contador = 0;
let cadena = "Esta s la cadena mas larga que he visto en mi vida";
let vocales = "aeiouáéíóúAEIOU";

contarVocales(cadena, vocales);

