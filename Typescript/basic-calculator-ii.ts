// Time:  O(n)
// Space: O(n)

// Support +, -, *, /.
class Solution {
    public calculate(s: string): number {
      const precedence: { [key: string]: number } = { '+': 0, '-': 0, '*': 1, '/': 1 };
  
      const operands: number[] = [];
      const operators: string[] = [];
      let operand = 0;
  
      for (let i = 0; i < s.length; i++) {
        if (/\d/.test(s[i])) {
          operand = operand * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
          if (i + 1 === s.length || !/\d/.test(s[i + 1])) {
            operands.push(operand);
            operand = 0;
          }
        } else if (s[i] === '(') {
          operators.push(s[i]);
        } else if (s[i] === ')') {
          while (operators.length > 0 && operators[operators.length - 1] !== '(') {
            this.compute(operands, operators);
          }
          operators.pop();
        } else if (precedence.hasOwnProperty(s[i])) {
          while (operators.length > 0 && precedence.hasOwnProperty(operators[operators.length - 1]) &&
                 precedence[operators[operators.length - 1]] >= precedence[s[i]]) {
            this.compute(operands, operators);
          }
          operators.push(s[i]);
        }
      }
  
      while (operators.length > 0) {
        this.compute(operands, operators);
      }
  
      return operands[operands.length - 1];
    }
  
    private compute(operands: number[], operators: string[]) {
      const right = operands.pop()!;
      const left = operands.pop()!;
      const op = operators.pop()!;
  
      switch (op) {
        case '+':
          operands.push(left + right);
          break;
        case '-':
          operands.push(left - right);
          break;
        case '*':
          operands.push(left * right);
          break;
        case '/':
          operands.push(left / right);
          break;
      }
    }
  }
  