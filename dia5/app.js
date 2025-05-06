"use strict";
class Produto {
  name;
  label;
  price;
  constructor(name, label, price) {
    this.name = name;
    this.label = label;
    this.price = price;
  }
}
class ProdutoDigital extends Produto {
  marketPlace;
  constructor(name, label, price, marketPlace) {
    super(name, label, price);
    this.marketPlace = marketPlace;
  }
}
const p = new ProdutoDigital("curso Prog", "Typescript", 500, "Hotmart");
console.log(p);

class Funcionario {
  setor;
  constructor(setor) {
    this.setor = setor;
  }
  mostrarSetor() {
    console.log(`Setor: ${this.setor}`);
  }
}
class Gerente extends Funcionario {
  constructor() {
    super("Adminsitracao");
  }
  relatorio() {
    this.mostrarSetor();
    console.log("Relatorio gerado: ");
  }
}
const g = new Gerente();
g.relatorio();
