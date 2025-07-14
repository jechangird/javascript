/*1. Crea una función que reciba un texto o parrafo y verifique si contiene alguna las siguientes malas palabras:
  - "tonto"
  - "chispas"
  - "recorcholis"
  - "rayos"
  - "caracoles"
  - "cielos"
  Si el texto contiene alguna de estas palabras, sustituye por "****" y retorna el texto modificado.
  Si no contiene ninguna, retorna el texto original.*/

let malasPalabras = ["tonto", "chispas", "recorcholis", "rayos", "caracoles", "cielos" ];
let texto = "En la fiesta del tonto habra bombones con chispas de chocolate, seria un tonto si no asistiera";
let i = 0;

function palabras(texto){
  for(let palabrota of malasPalabras){
    if (texto.includes(palabrota)) {
      console.log("Mala Palabra: " + palabrota);
      texto=texto.replaceAll(palabrota,"****");
      //i++;
    } 
    else {
      //console.log(`La palabra "${malasPalabras[i]}" no se encuentra en el texto.`);
      console.log("La palabra "+ palabrota +" no se encuentra en el texto.");
      //i++;
    }
  }return console.log(texto);
}

palabras(texto);


/*2. Según el siguiente array de objetos
  let personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
  ];

  Crea un código que me haga un filtro del array creando un nuevo array que contenga solo
  las personas que sean mayores de 25 años.

  Luego haz un código que me cree un nuevo array con las personas sean de españa y sean hombres*/

let personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
  ];

const mayoresDeVenticinco = personas.filter(personas => personas.edad > 25); 
console.log("Mayores de 25: ", mayoresDeVenticinco);

const espanolesMasculinos = personas.filter(personas => (personas.pais == "España" && personas.sexo == "masculino") );
console.log("Españoles Masculinos: ", espanolesMasculinos);



/*Ejercicio #6
Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar 
la multiplicación del número menor del arreglo y el número mayor del arreglo.*/

var  numeros = [1,2,3,4,5,6,7,8,9,0];

function multiplicarArreglo(numeros){
  let minimo = Math.min(...numeros);
  let maximo = Math.max(...numeros);
  console.log("el minimo es : " + minimo + " y el maximo es: " + maximo);

}

multiplicarArreglo(numeros);