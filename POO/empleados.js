/*
        Crea una un sistema que modele diferentes tipos de empleados utilizando herencia y
        POO. Crea una clase base llamada Empleado con propiedades como nombre, apellido, y salario.
        Luego, crea clases derivadas como Gerente, Desarrollador y Diseñador que
        hereden de Empleado y añadan propiedades o métodos específicos para cada tipo de empleado.

        Cada clase derivada debe tener un metodo de presentación distinto que muestre
        información específica del tipo de empleado. Por ejemplo, el Gerente podría mostrar
        información sobre su equipo, el Desarrollador podría mostrar sus lenguajes de programación
        y el diseñador podria mostrar tecnologias de diseño que utiliza. 

        El diseñador debe de tener como propiedades: nombre, apellido, salario y tecnologias.
        El desarrollador debe de tener como propiedades: nombre, apellido, salario y lenguajes.
        El gerente debe de tener como propiedades: nombre, apellido, salario y equipo de trabajo.

        Además, cada trabajador debe de tener un metodo que calcule el monto por horas extras trabajadas más su salario
        teniendo en cuenta que para un diseñador la hora extra es de $100, para un desarrollador es de $150
        y para un gerente es de $200. Y el salario de un diseñador es de $1000, el salario de un desarrollador es de $1500
        y el salario de un gerente es de $2000.*/

class Empleados{
  constructor(nombre, apellido, salario){
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
  } 
}

class Disenador extends Empleados{
  constructor(nombre, apellido, salario, valor_hora_extra, tecnologias, cantidad_horas_extras){
    super(nombre, apellido, salario);
      this.salario = 1000;
      this.valor_hora_extra = 100;
      this.tecnologias = ["CCS", "TAILWINDS", "SASS", "REACT"];
      this.cantidad_horas_extras = cantidad_horas_extras;
  }
  presentar_disenador(){
    return `Nombre: ${this.nombre}, Diseñador, Salario: ${this.salario} `;
  }

  calcular_salario(){
    return  `Salario del Mes: ${this.cantidad_horas_extras * this.valor_hora_extra+this.salario}`;
  }
}

class Desarrollador extends Empleados{
  constructor(nombre, apellido, salario, hora_extra, lenguajes){
    super(nombre, apellido, salario);
      this.salario = 1500;
      this.hora_extra = 150;
      this.lenguajes = ["HTML", "JAVASCRIPT", "PYTHON", "PHP"];
  }
  presentar_desarrollador(){
    return `Nombre: ${this.nombre}, Desarrollador, Salario: ${this.salario} `;

  }
}

class Gerente extends Empleados{
  constructor(nombre, apellido, salario, hora_extra, equipo){
    super(nombre, apellido, salario);
    this.salario = 2000;
    this.hora_extra = 200;
    this.equipo = ["DISEÑADOR", "DESARROLLADOR"];
  }
  presentar_gerente(){
    return `Nombre: ${this.nombre}, Gerente, Salario: ${this.salario} `;
  }
}


const empleado1 = new Disenador("José Elias", "Changir D.");
console.log(empleado1.presentar_disenador());
empleado1.cantidad_horas_extras = 2;
console.log(empleado1.calcular_salario());

const empleado2 = new Desarrollador("Clara", "Lopez");
console.log(empleado2.presentar_desarrollador());

const empleado3 = new Gerente("Antonio José", "Yepez");
console.log(empleado3.presentar_gerente());