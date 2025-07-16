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
        let armas = ["liguita", "palito", "cortaunas", "pistola de agua"];
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
        let hechizos = ["abracadabra", "maldicion", "brujeria", "vudu"];
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
        let flechas = ["flecha plana", "flecha gorda", "flechita", "flecha envenenada"];
        let flecha = flechas[2];
        console.log(`${this.nombre} esta atacando con ${flecha}`);

    }
}

let jose = new Guerrero("jose", 5, 3, 8, 100);
jose.saludar();
jose.atacar_con_armas();

let glafira = new Mago("glafira", 5, 3, 8, 100);
glafira.saludar()
glafira.atacar_con_hechizos();

let toro = new Arquero("toro", 5, 3, 8, 100);
toro.saludar()
toro.disparar();

