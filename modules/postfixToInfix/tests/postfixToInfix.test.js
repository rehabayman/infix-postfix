import PostfixToInfixConverter from '../index.js';

const converter = new PostfixToInfixConverter();

describe('Postfix to Infix Conversion', function() {
  test('{xy^5z*/2+} should output {(((x^y)/(5*z))+2)}', () => {
    const input = 'xy^5z*/2+';
    const expectedOutput = '(((x^y)/(5*z))+2)';
    const output = converter.postfixToInfix(input);
    expect(output).toBe(expectedOutput);
  });

  test('{abcd^e-fgh*+^*+i-} should output {((a+(b*(((c^d)-e)^(f+(g*h)))))-i)}',
      () => {
        const input = 'abcd^e-fgh*+^*+i-';
        const expectedOutput = '((a+(b*(((c^d)-e)^(f+(g*h)))))-i)';
        const output = converter.postfixToInfix(input);
        expect(output).toBe(expectedOutput);
      });
});
