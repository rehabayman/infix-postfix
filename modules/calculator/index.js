import Stack from '../../classes/stack.js';
import Utils from '../../classes/utils.js';
import InfixToPostfixConverter from '../infixToPostfix/index.js';

/**
 * A class for evaluating postfix/infix expressions
 */
class Calculator {
  /**
     * Evaluates the postfix expression, operands should be digits only
     * @param {String} postfixExp postfix expression
     * @return {Number}
     */
  static evaluatePostfixExp(postfixExp) {
    // 1. While reading the expression from left to right,
    // push the element in the stack if it is an operand.
    // 2. Pop the two operands from the stack,
    // if the element is an operator and then evaluate it.
    // 3. Push back the result of the evaluation.
    // Repeat it till the end of the expression.
    const postfixStack = new Stack();
    let char; let op1; let op2; let res = 0;
    postfixExp = postfixExp.split(' ');

    for (let i = 0; i < postfixExp.length; i++) {
      char = postfixExp[i];
      if (Utils.isDigit(char)) {
        postfixStack.push(parseInt(char));
      } else if (Utils.isOperator(char)) {
        op1 = postfixStack.pop();
        op2 = postfixStack.pop();

        switch (char) {
          case '+':
            res = op2 + op1;
            break;
          case '-':
            res = op2 - op1;
            break;
          case '*':
            res = op2 * op1;
            break;
          case '/':
            res = op2 / op1;
            break;
          case '^':
            res = Math.pow(op2, op1);
            break;
        }

        postfixStack.push(res);
      }
    }

    return postfixStack.pop();
  }

  /**
     * Evaluates the infix expression, operands should be digits only
     * @param {String} infixExp infix expression
     * @return {Number}
     */
  static evaluateInfixExp(infixExp) {
    const converter = new InfixToPostfixConverter(infixExp);
    const postfixExp = converter.infixToPostfix(infixExp);
    return this.evaluatePostfixExp(postfixExp);
  }
}

export default Calculator;
