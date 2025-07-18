let legolas = {
  nombre: "legolas",
  defensa: 10,
  ataque: 100,
  vida: 1000,
  flechas: [
    {
      nombre: "flecha de fuego",
      ataque: 200,
      cantidad: 5,
    },
    {
      nombre: "flecha de hielo",
      ataque: 200,
      cantidad: 5,
    },
  ],
};

let jhon_snow = {
  nombre: "jhon snow",
  defensa: 15,
  ataque: 120,
  vida: 1200,
  armas: [
    {
      nombre: "espada",
      ataque: 150,
    },
    {
      nombre: "maza",
      ataque: 180,
    },
    {
      nombre: "lobo",
      ataque: 220,
    },
    {
      nombre: "poder del guion",
      ataque: 3000,
    },
  ],
};

function numero_aleatorio(numero) {
  return Math.floor(Math.random() * numero);
}

function verificar_muerte(personajes) {
  for (personaje of personajes) {
    if (personaje.vida <= 0) {
      return false;
    }
  }
  return true;
}

do {
  let personajes = [legolas, jhon_snow];
  let turno = Math.floor(Math.random() * 2);
  let atacante = personajes[turno];
  do {
    var defensor = personajes[Math.floor(Math.random() * 2)];
  } while (defensor.nombre === atacante.nombre);

  let accion = numero_aleatorio(2);

  if (accion == 0) {
    console.log(`${atacante.nombre} ataca a ${defensor.nombre} con los puños`);
    daño =
      numero_aleatorio(atacante.ataque) - numero_aleatorio(defensor.defensa);
    if (daño < 0) {
      daño = 0;
    }
    defensor.vida -= daño; //defensor.vida = defensor.vida - daño
    console.log(
      `${atacante.nombre} le ha quitado ${daño} puntos de vida a ${defensor.nombre}, le quedan ${defensor.vida}`
    );
    if (defensor.vida <= 0) {
      console.log(`${defensor.nombre} ha muerto`);
    }
  } else if ((accion = 1)) {
    if (atacante.flechas) {
      let flecha = atacante.flechas[numero_aleatorio(atacante.flechas.length)];
      console.log(
        `${atacante.nombre} ataca a ${defensor.nombre} con ${flecha.nombre}`
      );
      daño =
        numero_aleatorio(flecha.ataque) - numero_aleatorio(defensor.defensa);
      if (daño < 0) {
        daño = 0;
      }
      defensor.vida -= daño; //defensor.vida = defensor.vida - daño
      console.log(
        `${atacante.nombre} le ha quitado ${daño} puntos de vida a ${defensor.nombre}, le quedan ${defensor.vida}`
      );
      if (defensor.vida <= 0) {
        console.log(`${defensor.nombre} ha muerto`);
      }
    } else if (atacante.armas) {
      let arma = atacante.armas[numero_aleatorio(atacante.armas.length)];
      console.log(
        `${atacante.nombre} ataca a ${defensor.nombre} con ${arma.nombre}`
      );
      daño = numero_aleatorio(arma.ataque) - numero_aleatorio(defensor.defensa);
      if (daño < 0) {
        daño = 0;
      }
      defensor.vida -= daño; //defensor.vida = defensor.vida - daño
      console.log(
        `${atacante.nombre} le ha quitado ${daño} puntos de vida a ${defensor.nombre}, le quedan ${defensor.vida}`
      );
      defensor.vida -= daño;
      if (defensor.vida <= 0) {
        console.log(`${defensor.nombre} ha muerto`);
      }
    }
  }
} while (verificar_muerte([legolas, jhon_snow]));