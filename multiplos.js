let a = parseInt(gets());
let N = parseInt(gets());

//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

const somaMultiplos = () => {
  let total = 0;
  for (let i = 0; i < N; i++) {
    let multi = a * i;
    if (multi <= N) {
      total += multi;
    }
  }
  return total;
};
print(somaMultiplos());
