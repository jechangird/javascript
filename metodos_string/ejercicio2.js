//3. Crea una función que reciba un string y retorne el string al revés.
 function invertir_texto(texto){
  let palabraInvertida = "";
  for(let i = texto.lenght - 1; i >= 0; i-- ){
    palabraInvertida += texto[i];
  }
  return palabraInvertida;
 }

 console.log(invertir_texto("yo soy tu padre"));