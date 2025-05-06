function simplesLog(
  target: any,
  propertKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function () {
    console.log("Rodando a funcao...");
    return original.apply(this);
  };
}

class Exemplo {
  @simplesLog
  digaOi() {
    console.log("oi");
  }
}

const e = new Exemplo();
e.digaOi();
