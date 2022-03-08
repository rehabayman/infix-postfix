import Calculator from '../index.js';

describe('Postfix Expressions Evaluation', function() {
  test('{4 5 6 * +} should output {34}', () => {
    const input = '4 5 6 * +';
    const expectedOutput = 34;
    const output = Calculator.evaluatePostfixExp(input);
    expect(output).toBe(expectedOutput);
  });

  test('{1 2 3 4 5 * + * +} should output {47}', () => {
    const input = '1 2 3 4 5 * + * +';
    const expectedOutput = 47;
    const output = Calculator.evaluatePostfixExp(input);
    expect(output).toBe(expectedOutput);
  });
});

describe('Infix Expressions Evaluation', function() {
  test('{2 ^ 3 + 1} should output {9}', () => {
    const input = '2 ^ 3 + 1';
    const expectedOutput = 9;
    const output = Calculator.evaluateInfixExp(input);
    expect(output).toBe(expectedOutput);
  });

  test('{4 - 2 + 20 / 5} should output {6}', () => {
    const input = '4 - 2 + 20 / 5';
    const expectedOutput = 6;
    const output = Calculator.evaluateInfixExp(input);
    expect(output).toBe(expectedOutput);
  });

  test('{1-(-2)} should output {3}', () => {
    const input = '1-(-2)';
    const expectedOutput = 3;
    const output = Calculator.evaluateInfixExp(input);
    expect(output).toBe(expectedOutput);
  });

  test('{- (3 - (- (4 + 5) ) )} should output {-12}', () => {
    const input = '- (3 - (- (4 + 5) ) )';
    const expectedOutput = -12;
    const output = Calculator.evaluateInfixExp(input);
    expect(output).toBe(expectedOutput);
  });
});
