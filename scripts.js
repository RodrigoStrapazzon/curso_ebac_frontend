class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  emitirSom() {
    console.log(`${this.nome} está fazendo um som.`);
  }
}

class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }

  emitirSom() {
    console.log(`${this.nome}, o cachorro, está latindo.`);
  }

  buscarBola() {
    console.log(`${this.nome} está buscando a bola!`);
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  emitirSom() {
    console.log(`${this.nome}, o gato, está miando.`);
  }

  arranhar() {
    console.log(`${this.nome} está arranhando o sofá!`);
  }
}

const cachorro1 = new Cachorro('Rex', 5, 'Labrador');
const cachorro2 = new Cachorro('Max', 3, 'Beagle');
const gato1 = new Gato('Felix', 2, 'Preto');


cachorro1.emitirSom(); 
cachorro2.buscarBola(); 
gato1.arranhar(); 
