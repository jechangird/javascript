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
        console.log(`$ Hola, soy{this.nombre}`);
    }
}

class Guerrero extends Personajes {
    
}