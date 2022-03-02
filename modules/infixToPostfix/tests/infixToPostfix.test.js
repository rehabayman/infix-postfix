import InfixToPostfixConverter from '../index.js';

const converter = new InfixToPostfixConverter();

describe('Infix to Postfix Conversion', function() {
  test('{x^y/(5*z)+2} should output {xy^5z*/2+}', () => {
    const input = 'x^y/(5*z)+2';
    const expectedOutput = 'xy^5z*/2+';
    const output = converter.infixToPostfix(input);
    expect(output).toBe(expectedOutput);
  });

  test('{a+b*(c^d-e)^(f+g*h)-i} should output {abcd^e-fgh*+^*+i-}', () => {
    const input = 'a+b*(c^d-e)^(f+g*h)-i';
    const expectedOutput = 'abcd^e-fgh*+^*+i-';
    const output = converter.infixToPostfix(input);
    expect(output).toBe(expectedOutput);
  });
});
