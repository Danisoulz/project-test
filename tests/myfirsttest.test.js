const operation = (a,b) => a > b;

test('comparar o valor de a com b', () => {
    expect(operation(5, 12)).toBe(false);
});