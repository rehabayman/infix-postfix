import Stack from '../../classes/stack.js';
import Utils from '../../classes/utils.js';

/**
 * Class that converts postfix to infix expression
 */
class PostfixToInfixConverter {
  /**
   * Converts postfix to infix expression
   * @param {String} postfixExp postfix expression
   * @return {String}
   */
  postfixToInfix(postfixExp) {
    const infixStack = new Stack();
    postfixExp = postfixExp.split(' ');

    for (let i = 0; i < postfixExp.length; i++) {
      if (Utils.isOperand(postfixExp[i])) {
        infixStack.push(postfixExp[i]);
      } else {
        const op1 = infixStack.pop();
        const op2 = infixStack.pop();
        const str = '( ' + op2 + ' ' + postfixExp[i] + ' ' + op1 + ' )';
        infixStack.push(str);
      }
    }
    return infixStack.top().trim();
  }
}

export default PostfixToInfixConverter;
