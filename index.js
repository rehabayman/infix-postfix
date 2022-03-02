import PostfixToInfixConverter from './modules/postfixToInfix/index.js';
import InfixToPostfixConverter from './modules/infixToPostfix/index.js';

const postfixToInfixCon = new PostfixToInfixConverter();
const infixToPostfixCon = new InfixToPostfixConverter();

const infixExp = 'x^y/(5*z)+2';
const postfixExp = infixToPostfixCon.infixToPostfix(infixExp);
const infixExpConverted = postfixToInfixCon.postfixToInfix(postfixExp);
console.log(`Infix expression before conversion: ${infixExp}`);
console.log(`Postfix expression after conversion: ${postfixExp}`);
console.log(`Infix expression after conversion: ${infixExpConverted}`);
