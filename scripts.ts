function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudar(nome: string): string {
    return `Olá ${nome}`;
}

const resultadoMultiplicacao = multiplicar(5, 3);
const saudacao = saudar("Rodrigo");

console.log(resultadoMultiplicacao);
console.log(saudacao);
