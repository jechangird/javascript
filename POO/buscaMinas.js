let tablero = [];

function llenar_tablero(tablero, longitud){
  for(let i = 0; i < longitud; i++ ){
    tablero[i] = [];
    for(let j = 0; j < longitud; j++){
      tablero[i][j] = "";
    }
  }
  return console.log(tablero);
}

console.log(llenar_tablero(tablero,9));