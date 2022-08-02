const estudante={
    nome:"Thiago",
    sobrenome:"Machado Lopes",
    numeroMatricula:270596,
    notasDoSemestre:[8,10,7.5]
}
console.log(estudante);
estudante.modulo="git e terminal";

console.log(estudante);

console.log("NOME", estudante.nome);
console.log("SEGUNDA NOTA", estudante.notasDoSemestre[1])
console.log("MODULO", estudante["modulo"]);

const novoEstudante = {...estudante}
novoEstudante.nome ="Astrodev"
novoEstudante.notasDoSemestre =[...estudante.notasDoSemestre,9]

novoEstudante["modulo"] = "Introdução à web";
console.log(novoEstudante);

const estudanteLabenu = [];
estudanteLabenu.push(estudante,novoEstudante);

console.log(estudanteLabenu);

// const carrinho = {
//     nome: "Ana",
//     formaDePagamento: "cheque",
//     endereço: "Goiânia",
// }

// carrinho.compras = [{nomeDoProduto: "cervejas"}, {precoDoProduto: 35}, {quantidadeDeItens: 12}];
// console.log(carrinho);
// console.log(carrinho.compras);
// console.log(carrinho.compras[2]);

// const carrinhoPresente = {...carrinho};

// carrinhoPresente.nome= "Bia";
// carrinhoPresente.formaDePagamento = "cartão presente";
// console.log(carrinhoPresente);