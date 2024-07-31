const aluno = require("../alunadani");

describe("teste do objeto aluna", () => {
  test("teste de apresentacao", () => {
    const spy = jest.spyOn(console, "log");
    aluno.apresentacao();
    expect(spy).toHaveBeenCalledWith("Olá, meu nome é Daniela, tenho 44 anos e curso programação!");
    spy.mockRestore();
  });

  test("calculo de media inteiro", () =>{
    const media = aluno.calcularMedia(7,8,9);
    expect(media).toBe(8);
  })
  test("calculo de media pontuacao", () =>{
    const media = aluno.calcularMedia(5,6,9);
    expect(media).toBeCloseTo(6.6667,4);
  })
  test("calculo de media pontuacao", () =>{
    const media = aluno.calcularMedia(5,6,null);
    expect(media).toBeCloseTo(3.6667,4);
  })
});
