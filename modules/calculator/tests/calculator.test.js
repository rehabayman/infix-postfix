import Calculator from '../index.js';

describe('Postfix Expressions Evaluation', function() {
  test('{456*+} should output {34}', () => {
    const input = '456*+';
    const expectedOutput = 34;
    const output = Calculator.evaluatePostfixExp(input);
    expect(output).toBe(expectedOutput);
  });

  test('{12345*+*+} should output {47}', () => {
    const input = '12345*+*+';
    const expectedOutput = 47;
    const output = Calculator.evaluatePostfixExp(input);
    expect(output).toBe(expectedOutput);
  });
});

describe('Infix Expressions Evaluation', function() {
  test('{2^3+1} should output {9}', () => {
    const input = '2^3+1';
    const expectedOutput = 9;
    const output = Calculator.evaluateInfixExp(input);
    expect(output).toBe(expectedOutput);
  });

  test('{4-2+5/5} should output {3}', () => {
    const input = '4-2+5/5';
    const expectedOutput = 3;
    const output = Calculator.evaluateInfixExp(input);
    expect(output).toBe(expectedOutput);
  });
});
