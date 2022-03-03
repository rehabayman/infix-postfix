import Stack from '../../classes/stack.js';
import Utils from '../../classes/utils.js';

/**
 * Class that converts infix to postfix expression
 */
class InfixToPostfixConverter {
  /**
   * Converts infix to postfix expression
   * @param {String} infixExp infix expression
   * @return {String}
   */
  infixToPostfix(infixExp) {
    let postfixExp = ''; const postfixStack = new Stack();
    postfixStack.push('#');
    infixExp = infixExp.split(' ');

    for (let i = 0; i < infixExp.length; i++) {
      if (Utils.isOperand(infixExp[i])) {
        postfixExp += infixExp[i] + ' ';
      } else if (infixExp[i] === '(') {
        postfixStack.push(infixExp[i]);
      } else if (infixExp[i] === ')') {
        while (postfixStack.top() !== '#' && postfixStack.top() !== '(') {
          postfixExp += postfixStack.pop() + ' ';
        }
        postfixStack.pop();
      } else {
        // eslint-disable-next-line max-len
        if (Utils.precedence(infixExp[i]) > Utils.precedence(postfixStack.top())) {
          postfixStack.push(infixExp[i]);
        } else {
          while (postfixStack.top() !== '#' &&
            // eslint-disable-next-line max-len
            (Utils.precedence(infixExp[i]) <= Utils.precedence(postfixStack.top()))) {
            postfixExp += postfixStack.pop() + ' ';
          }
          postfixStack.push(infixExp[i]);
        }
      }
    }

    while (postfixStack.top() !== '#') {
      postfixExp += postfixStack.pop() + ' ';
    }

    return postfixExp.trimEnd();
  }
}

export default InfixToPostfixConverter;
