// Imports
const sum = require('./scripts/sum');
const capitalize = require('./scripts/capitalize');
const calculator = require('./scripts/calculator');
const caesarCypher = require('./scripts/caesar_cipher');
const analyzeArray = require('./scripts/analyze_array');
const reverseArray = require('./scripts/reverse_array');

// Sum
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Capitalize
test("capitalizes the string 'hello world'", () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

// Reverse Array
test("reverses the string 'hello world' to be 'dlrow olleh'", () => {
  expect(reverseArray('ola')).toBe('alo');
});

// Calculator
test("adds 1 + 2 to equal 3", () => {
  expect(calculator().add(1,2)).toBe(3);
})
test("substracts 10 - 3 to equal 7", () => {
  expect(calculator().substract(10,3)).toBe(7);
})
test("multiplies 3 + 2 to equal 6", () => {
  expect(calculator().multiply(3,2)).toBe(6);
})
test("divides 12 / 6 to equal 2", () => {
  expect(calculator().divide(12,6)).toBe(2);
})

// Caesar Cypher
test("Cyphers the string 'Hello, World!'", () => {
  expect(caesarCypher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

// Analyze Array
test("Analyze array", () => {
  let testObject = { min: 1, max: 4, average: 2.5, length: 4 };
  expect(analyzeArray([1,2,3,4])).toMatchObject(testObject);
})