"use strict";
// any permite qualquer tipo de valor. Evite usar, pois desativa as verificações do Typescript
let valor = "texto";
valor: 132;
valor: true;
// unknown. Aceita qualquer valor, mas exige verificação de tipo antes de usar.
let dado = 42;
// erro se tentar usar diretamente
// console.log(dado.tofixed(2))
if (typeof dado === "number") {
    console.log(dado.toFixed(2)); // agora funciona
}
// union (uniao de tipos)
let resposta;
resposta = "ok";
resposta = 200;
// resposta = true // nao permitido
// tuple (tupla)
// array com numero fixo de elementos, com tipos específicos por posição.
let produto;
produto = ["Tênis", 199.9];
// produto = [199.9, "tênis"] // ERRO ordem importar
var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Pendente"] = 0] = "Pendente";
    StatusPedido[StatusPedido["Processando"] = 1] = "Processando";
    StatusPedido[StatusPedido["Enviando"] = 2] = "Enviando";
    StatusPedido[StatusPedido["Entregue"] = 3] = "Entregue";
    StatusPedido[StatusPedido["Cancelado"] = 4] = "Cancelado";
})(StatusPedido || (StatusPedido = {}));
let statusAtual = StatusPedido.Processando;
console.log(statusAtual);
var StatusPedido2;
(function (StatusPedido2) {
    StatusPedido2["Pendente"] = "Pendente";
    StatusPedido2["Enviado"] = "Enviado";
    StatusPedido2["Cancelado"] = "Cancelado";
})(StatusPedido2 || (StatusPedido2 = {}));
console.log(StatusPedido2.Pendente);
