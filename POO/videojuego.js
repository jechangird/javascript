/*
  Crea un videojuego que tenga las siguientes clases:
  - personaje: Clase base para todos los personajes del juego.
  - guerrero: Clase que hereda de personaje y representa a un guerrero.
  - mago: Clase que hereda de personaje y representa a un mago.
  - arquero: Clase que hereda de personaje y representa a un arquero.

  personaje tiene las siguientes propiedades y metodos:
  - nombre: Nombre del personaje.
  - vida: Vida del personaje.
  - daño: Daño del personaje.
  - defensa: Defensa del personaje.
  - velocidad: Velocidad del personaje.
  - atacar(): Metodo utilizado para atacar (con los puños).
  - saludar(): Método utilizado para saludar indicando nombre y clase.

  guerrero tiene las siguientes propiedades y metodos:
  - array_de_armas: Armas que puede usar el guerrero.
  - atacar_con_arma(): Método utilizado para atacar con un arma aleatoria del array.

  mago tiene las siguientes propiedades y metodos:
  - array_de_hechizos: Hechizos que puede usar el mago.
  - atacar_con_hechizo(): Método utilizado para atacar con un hechizo aleatorio del array.

  arquero tiene las siguientes propiedades y metodos:
  - array_de_flechas: Flechas que puede usar el arquero.
  - disparar(): Método utilizado para disparar una flecha aleatoria del array.

  Debes de crear al menos 5 personajes, al menos 2 deben de ser guerreros, 2 magos y 1 arquero.

  Al iniciar el juego, cada personaje debe saludar indicando su nombre y clase.

  Luego habrá una ronda de ataques. En cada ronda, cada personaje atacará a otro personaje de forma aleatoria.

  Cada personaje solo puede atacar una vez por ronda.

  Además, el orden de la ronda debe ser determinado de forma aleatoria pero tomando en cuenta la velocidad de cada personaje.

  Para ello debes jugar con las probabilidades de cada personaje, por ejemplo:
  - Si el personaje tiene una velocidad de 10, debes generar un numero aleatorio entre 1 y 10.
  - Según el numero aleatorio generado, será determinado el orden de ataque de cada personaje en esa ronda

  Ejemplo:
  Personaje 1: 5
  Personaje 2: 8
  Personaje 3: 2
  Personaje 4: 10
  Personaje 5: 6

  El personaje 4 atacará primero, luego el personaje 2, luego el personaje 5, luego el personaje 1 y por último el personaje 3.

  Cuando un personaje ataque a otro, se utilizara la siguiente lógica:

  El personaje atacado se intentara defender, este generara un numero aleatorio entre 1 y su defensa.
  Si el numero aleatorio es mayor que el daño del atacante, el ataque falla y no se le resta vida al personaje atacado.
  Si el numero aleatorio es menor o igual al daño del atacante, el ataque tiene éxito y se le resta vida al personaje atacado.

  Al momento de atacar, se debe mostrar un mensaje indicando quién ataca a quién y si el ataque fue exitoso o fallido.

  Además, hay un tercio de posibilidades de que un personaje ataque con sus puños y dos tercios de posibilidades de que ataque con su arma, hechizo o flecha (según su clase).

  Cuando la vida de un personaje llegue a 0, este será eliminado del juego y no podrá atacar más.
  El juego termina cuando solo quede un personaje con vida.

  Es importante que cuando un personaje muera, se muestre un mensaje indicando que ha muerto y que no puede atacar más.
  Además, al final del juego, se debe mostrar un mensaje indicando quién es el ganador.

  El juego es ganado por el personaje que quede con vida al final.

  Nota: es importante imprimir cada numero de ronda
  ejemplo: "Ronda 1", "Ronda 2", etc.

  Puntos opcionales:
  - Implementa un sistema de habilidades especiales para cada clase, estas habilidades solo se pueden ser utilizadas una vez por juego.
  - Implementa un inventario y objetos para cada personaje, los cuales pueden ser utilizados para mejorar sus habilidades o recuperar vida, sin embargo
  Estos consumirán un turno de ataque y tienen un número limitado de usos.
  - Agrega la clase "vampiro" cuyos ataques regenerar un % aleatorio de vida al personaje.
  - Agrega la posibilidad de 1 entre 10 de que un personaje se tropiece y no pueda hacer nada en esa ronda.
*/



//clase personajes

class Personajes {
    constructor(nombre, vida, dano, defensa, velocidad,clase){
        this.nombre = nombre;
        this.vida = vida;
        this.dano = dano;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.clase = clase;
    }
    //metodo atacar
    atacar(){
        console.log(`${this.nombre} esta atacando`);


    }

    //metodo saludar
    saludar(){
        console.log(`Hola, soy ${this.nombre} y soy ${this.clase}`);
    }
}

class Guerrero extends Personajes {
    super(nombre, vida, dano, defensa, velocidad, clase){

    }
    //metodo atacar con armas
    atacar_con_armas(){
        let armas = ["liguita", "palito", "cortaunas", "pistola de agua", "rayador de queso"];
        let arma = armas[1];
        console.log(`${this.nombre} esta atacando con ${arma}`);

    }
}

//class mago
class Mago extends Personajes {
    super(nombre, vida, dano, defensa, velocidad,clase){

    }
    //metodo atacar con armas
    atacar_con_hechizos(){
        let hechizos = ["abracadabra", "mardicion", "brujeria", "vudu", "7 potencias"];
        let hechizo = hechizos[2];
        console.log(`${this.nombre} esta atacando con ${hechizo}`);

    }
}

//class arquero
class Arquero extends Personajes {
    super(nombre, vida, dano, defensa, velocidad, clase){

    }
    //metodo disparar
    disparar(){
        let flechas = ["flecha plana", "flecha gorda", "flechita", "flechota", "contra flecha"];
        let flecha = flechas[2];
        console.log(`${this.nombre} esta atacando con ${flecha}`);

    }
}

let jose = new Guerrero("jose", 5, 3, 8, 100);
console.log(jose.constructor.name)
jose.saludar();
jose.atacar_con_armas();

let glafira = new Mago("glafira", 5, 3, 8, 100);
glafira.saludar()
glafira.atacar_con_hechizos();

let toro = new Arquero("toro", 5, 3, 8, 100);
toro.saludar()
toro.disparar();

