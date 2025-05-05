// any permite qualquer tipo de valor. Evite usar, pois desativa as verificações do Typescript

let valor: any = "texto";
valor: 132;
valor: true;

// unknown. Aceita qualquer valor, mas exige verificação de tipo antes de usar.

let dado: unknown = 42;
// erro se tentar usar diretamente
// console.log(dado.tofixed(2))

if (typeof dado === "number") {
  console.log(dado.toFixed(2)); // agora funciona
}

// union (uniao de tipos)
let resposta: string | number;
resposta = "ok";
resposta = 200;

// resposta = true // nao permitido

// tuple (tupla)
// array com numero fixo de elementos, com tipos específicos por posição.
let produto: [string, number];
produto = ["Tênis", 199.9];
// produto = [199.9, "tênis"] // ERRO ordem importar

enum StatusPedido {
  Pendente,
  Processando,
  Enviando,
  Entregue,
  Cancelado,
}

let statusAtual: StatusPedido = StatusPedido.Processando;
console.log(statusAtual);

enum StatusPedido2 {
  Pendente = "Pendente",
  Enviado = "Enviado",
  Cancelado = "Cancelado",
}

console.log(StatusPedido2.Pendente);
