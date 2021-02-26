

// function criarAluno(nome, n1,n2){

//     return {
//             nome: nome,
//             nota1: n1,
//             nota2: n2,
//             media: function(){
//                     return (this.nota1 + this.nota2) / 2;
//             }
//     }
// }

function aluno(nome, n1, n2){

    this.nome = nome;
    this.n1 = n1;
    this.n2 = n2;

    this.media = function (){
        return (this.n1 + this.n2) / 2;
    }
}


// var turma = [
//             criarAluno('Johnny', 9, 5),
//             criarAluno('João', 3, 6),
//             criarAluno('Juliete', 10, 9)
// ]

// var aluno = turma[2]

var a = new aluno('Johnny', 9, 4)
var a = new aluno('João', 3, 4)

console.log(a)

// turma.forEach( function(elemento){
//     console.log(elemento)
// })

// for (var aluno of turma ) {
//     console.log(aluno.nome + ' - ' + aluno.media())
// }