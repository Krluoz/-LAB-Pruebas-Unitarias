const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 / 2 to equal 5', () =>{
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide -9 / -4 to equal 2.25', () =>{
  expect(calculator.divide(-9, -4)).toBe(2.25);
});

test('multply 5 * 20 to equal 100', () =>{
  expect(calculator.multiply(5,20)).toBe(100);
});

test('multply -8 * 5 to equal -40', () =>{
  expect(calculator.multiply(-8, 5)).toBe(-40);
});

test('divide error with the second argument is 0', () =>{
  expect(() =>divide(5,0)).toThrow();
});