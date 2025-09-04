const { calcularMediaAluno } = require('../src/calcularMediaAluno');

test('Função calcularMediaAluno deve estar definida', () => {
    expect(calcularMediaAluno).toBeDefined();
  });

test('Deve lançar erro se a1 ou a2 não forem informadas', () => {
    expect(() => calcularMediaAluno(undefined, 5)).toThrow("Notas a1 ou a2 não informadas");
    expect(() => calcularMediaAluno(5, undefined)).toThrow("Notas a1 ou a2 não informadas");
  });

test('Deve lançar erro se a1 ou a2 forem negativas', () => {
  expect(() => calcularMediaAluno(-1, 5)).toThrow("Notas a1 ou a2 não podem ser negativas");
  expect(() => calcularMediaAluno(5, -2)).toThrow("Notas a1 ou a2 não podem ser negativas");
});

test('Deve calcular a média com a1 e a2 quando a3 não é informada', () => {
    const media = calcularMediaAluno(7, 8);
    expect(media).toBeCloseTo(7.6);
  });

test('Deve lançar erro se a3 for negativa', () => {
    expect(() => calcularMediaAluno(7, 8, -1)).toThrow("Nota a3 não pode ser negativa");
  });
    
test('Deve calcular a melhor média entre (a1 + a2) ou (a1 + a3)', () => {
  const media = calcularMediaAluno(9, 5, 10);
  expect(media).toBeCloseTo(9.6);
});

test('Deve calcular a melhor média entre (a1 + a3) ou (a2 + a3)', () => {
    const media = calcularMediaAluno(4, 9, 10);
    expect(media).toBeCloseTo(9.6);
  });
  
