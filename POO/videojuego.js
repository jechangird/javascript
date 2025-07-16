//clase personajes

class Personajes {
    constructor(nombre, vida, dano, defensa, velocidad){
        this.nombre = nombre;
        this.vida = vida;
        this.dano = dano;
        this.defensa = defensa;
        this.velocidad = velocidad;
    }
    //metodo atacar
    atacar(){
        console.log(`${this.nombre} esta atacando`);


    }

    //metodo saludar
    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

class Guerrero extends Personajes {
    super(nombre, vida, dano, defensa, velocidad){

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
    super(nombre, vida, dano, defensa, velocidad){

    }
    //metodo atacar con armas
    atacar_con_hechizos(){
        let hechizos = ["abracadabra", "maldicion", "brujeria", "vudu"];
        let hechizo = hechizos[2];
        console.log(`${this.nombre} esta atacando con ${hechizo}`);

    }
}




//let armas = ["liguita", "palito", "cortaunas", "pistola de agua"];
//let arma = armas[1];
let jose = new Guerrero("jose", 5, 3, 8, 100);
jose.saludar();
jose.atacar_con_armas();

let glafira = new Mago("glafira", 5, 3, 8, 100);
glafira.atacar_con_hechizos();

