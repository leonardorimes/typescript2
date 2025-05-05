interface Pessoa {
  nome: string;
  idade: number;
}

const p: Pessoa = {
  nome: "Leonardo",
  idade: 31,
};

interface Animal {
  especie: string;
}

//🔁 Extensão (herança) de interfaces

interface Cachorro extends Animal {
  raca: string;
}

const rex: Cachorro = {
  especie: "mamífero",
  raca: "labrador",
};

//🧩 Propriedades opcionais

interface Livro {
  titulo: string;
  autor?: string; //opcional
}

// 🛡️ Propriedades somente leitura

interface Produto {
    readonly id: 
}