import PostfixToInfixConverter from './modules/postfixToInfix/index.js';
import InfixToPostfixConverter from './modules/infixToPostfix/index.js';
import Calculator from './modules/calculator/index.js';

const postfixToInfixCon = new PostfixToInfixConverter();
const infixToPostfixCon = new InfixToPostfixConverter();

let infixExp = 'x ^ y / ( 5 * z ) + 2';
let postfixExp = infixToPostfixCon.infixToPostfix(infixExp);
const infixExpConverted = postfixToInfixCon.postfixToInfix(postfixExp);
console.log(`Infix expression before conversion: ${infixExp}`);
console.log(`Postfix expression after conversion: ${postfixExp}`);
console.log(`Infix expression after conversion: ${infixExpConverted}\n\n`);

postfixExp = '2 3 ^ 1 +';
let res = Calculator.evaluatePostfixExp(postfixExp);
console.log(`Postfix expression before evaluation: ${postfixExp}`);
console.log(`Postfix expression after evaluation: ${res}`);

infixExp = '4 - 2 + 20 / 5';
res = Calculator.evaluateInfixExp(infixExp);
console.log(`Infix expression before evaluation: ${infixExp}`);
console.log(`Infix expression after evaluation: ${res}`);
