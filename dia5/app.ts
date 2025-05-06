class Produto {
  name: string;
  label: string;
  price: number;

  constructor(name: string, label: string, price: number) {
    this.name = name;
    this.label = label;
    this.price = price;
  }
}

class ProdutoDigital extends Produto {
  marketPlace: string;

  constructor(name: string, label: string, price: number, marketPlace: string) {
    super(name, label, price);
    this.marketPlace = marketPlace;
  }
}

const p = new ProdutoDigital("curso Prog", "Typescript", 500, "Hotmart");

console.log(p);

class Funcionario {
  protected setor: string;

  constructor(setor: string) {
    this.setor = setor;
  }

  protected mostrarSetor() {
    console.log(`Setor: ${this.setor}`);
  }
}

class Gerente extends Funcionario {
  constructor() {
    super("Adminsitracao");
  }

  public relatorio() {
    this.mostrarSetor();
    console.log("Relatorio gerado: ");
  }
}

const g = new Gerente();

g.relatorio();
