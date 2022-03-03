import InfixToPostfixConverter from '../index.js';

const converter = new InfixToPostfixConverter();

describe('Infix to Postfix Conversion', function() {
  test('{x ^ y / ( 5 * z ) + 12} should output {x y ^ 5 z * / 12 +}', () => {
    const input = 'x ^ y / ( 5 * z ) + 12';
    const expectedOutput = 'x y ^ 5 z * / 12 +';
    const output = converter.infixToPostfix(input);
    expect(output).toBe(expectedOutput);
  });

  // eslint-disable-next-line max-len
  test('{a + b * ( c ^ d - e ) ^ ( f + g * h ) - i} should output {a b c d ^ e - f g h * + ^ * + i -}', () => {
    const input = 'a + b * ( c ^ d - e ) ^ ( f + g * h ) - i';
    const expectedOutput = 'a b c d ^ e - f g h * + ^ * + i -';
    const output = converter.infixToPostfix(input);
    expect(output).toBe(expectedOutput);
  });
});
