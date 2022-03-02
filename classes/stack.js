/**
 * Class that implements Stack and the methods
 * used in this project
 */
class Stack {
  /**
   * Class constructor that initializes the items array
   * to an empty array
   */
  constructor() {
    this.items = [];
  }

  /**
   * Pushes the item into the Stack
   * @param {Any} item
   */
  push(item) {
    this.items.push(item);
  }

  /**
   * Returns the items at the top of the stack without
   * removing it from the stack
   * @return {Any}
   */
  top() {
    return this.items[this.items.length-1];
  }

  /**
   * Returns the last item in the Stack and removes it
   * @return {Any}
   * @throws {Error} if the stack is empty
   */
  pop() {
    if (this.items.length == 0) {
      throw new Error('Stack is empty');
    }
    return this.items.pop();
  }
}

export default Stack;
