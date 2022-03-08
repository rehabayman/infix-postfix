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

  /**
   * Determines if the character is a digit
   * @param {String} char character in the expression
   * @return {Boolean}
   */
  static isDigit(char) {
    return /^[-+]?[0-9]+$/i.test(char);
  }

  /**
   * Determines if the character is an operator
   * @param {String} char character in the expression
   * @return {Boolean}
   */
  static isOperator(char) {
    return /^[\+|\-|\*|\/|\^]+$/i.test(char);
  }

  /**
   * Formats the expression before conversion
   * @param {String} exp
   * @return {String}
   */
  static formatExp(exp) {
    let newExp = '';
    let i = 0;
    let prevChar = '';
    let chunk;
    while (i < exp.length) {
      chunk = '';
      if (Utils.isOperand(exp[i])) {
        while (i < exp.length && Utils.isOperand(exp[i])) {
          newExp += exp[i];
          chunk += exp[i];
          i++;
        }
        prevChar = chunk;
        newExp += ' ';
      } else if (Utils.isOperator(exp[i]) || exp[i] === '(' || exp[i] === ')') {
        if ((exp[i] === '-' && prevChar === '') ||
          (exp[i] === '-' && prevChar === '(') ||
          (exp[i] === '-' && Utils.isOperator(prevChar))) {
          newExp += '0 ' + exp[i];
          chunk += exp[i];
          i++;
          // while (Utils.isOperand(exp[i])) {
          //   newExp += exp[i];
          //   chunk += exp[i];
          //   i++;
          // }
          prevChar = chunk;
          newExp += ' ';
        } else {
          newExp += exp[i] + ' ';
          prevChar = exp[i];
          i++;
        }
      } else {
        i++;
      }
    }
    return newExp;
  }
}

export default Utils;
