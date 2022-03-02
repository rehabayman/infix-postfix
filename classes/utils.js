/**
 * Class that contains helper functions needed accross
 * the project
 */
class Utils {
  /**
   * Returns the precedence of the operator
   * @param {String} ch operator
   * @return {Number}
   */
  static precedence(ch) {
    if (ch == '+' || ch == '-') {
      return 1; // Precedence of + or - is 1
    } else if (ch == '*' || ch == '/') {
      return 2; // Precedence of * or / is 2
    } else if (ch == '^') {
      return 3; // Precedence of ^ is 3
    } else {
      return 0;
    }
  }

  /**
   * Determines if the character is an operand
   * falls into /^[a-zA-Z0-9]+$/
   * @param {String} char character in the expression
   * @return {Boolean}
   */
  static isOperand(char) {
    return /^[a-zA-Z0-9]+$/i.test(char);
  }
}

export default Utils;
