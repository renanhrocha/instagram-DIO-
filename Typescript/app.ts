// Desafio 1
/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John"; 
*/
const employee: {code: number, name: string} = {
    code: 10,
    name: "John"
};

// Desafio 2

/* // Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissao
}

enum Profissao {
    Atriz,
    Padeiro,
    Desenvolvedor
} // para não conflitar com possíveis strings escritas de maneira errada.

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
}

let pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}
export {} 
"use strict";

let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
    campoSaldo.innerHTML = `${Number(campoSaldo.innerHTML) + soma}`;
}
function limparSaldo() {
    campoSaldo.innerHTML = "0";
    soma.value = "";
}
botaoAtualizar.addEventListener("click", () => {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener("click", () => {
    limparSaldo();
});