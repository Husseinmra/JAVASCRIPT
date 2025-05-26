const nome = 'Hussein';
const sobrenome = 'Abdallah';
const idade = 28;
const peso = 84;
const altura = 1.75;
let imc = peso / (altura * altura);
let anoNascimento = 2025 - idade;

console.log(`Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e peso ${peso} kg. Minha altura é ${altura} m e meu IMC é ${imc}. Eu nasci em ${anoNascimento}.`);