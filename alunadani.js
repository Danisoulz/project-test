let aluno = {
  nome: "Daniela",
  idade: 44,
  curso: "programação",

  apresentacao: function () {
    console.log(
      "Olá, meu nome é " +
        this.nome +
        ", tenho " +
        this.idade +
        " anos e curso " +
        this.curso +
        "!"
    );
  },

  calcularMedia: function (nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
  },
};
aluno.apresentacao();

let media = aluno.calcularMedia(8, 6, 9);
console.log("A média das notas é: " + media);

module.exports = aluno;