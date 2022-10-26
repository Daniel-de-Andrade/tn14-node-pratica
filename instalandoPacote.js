//retorna um objeto que possui uma chave cpf
const { cpf } = require("cpf-cnpj-validator");
//pega as chaves cpf e cnpj
// const cpf_cnpj = require("cpf-cnpj-validator");

// console.log(cpf_cnpj);

// gera um número de cpf
// const num = cpf.generate();
// console.log(num);

// formata o número gerado
// let num = cpf.generate();
let num = "07416602610";
num = cpf.format(num);
// console.log(num);

// verifica se é um número válido
let isValid = cpf.isValid(num);
console.log(num, isValid);

// module.exports = { cpf: num, isValid, message: "Um cpf aleatorio para voce" };
