class Node {
    value: string;
    left: Node | null;
    right: Node | null;

    constructor(value: string, left: Node | null = null, right: Node | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    private precedence: Map<string, number>;

    constructor() {
        this.precedence = new Map([
            ['+', 0],
            ['-', 0],
            ['*', 1],
            ['/', 1]
        ]);
    }

    expTree(s: string): Node | null {
        const operands: Node[] = [];
        const operators: string[] = [];
        let operand: number = 0;

        for (let i = 0; i < s.length; ++i) {
            if (!isNaN(Number(s[i]))) {
                operand = operand * 10 + parseInt(s[i]);
                if (i + 1 === s.length || isNaN(Number(s[i + 1]))) {
                    operands.push(new Node(operand.toString()));
                    operand = 0;
                }
            } else if (s[i] === '(') {
                operators.push(s[i]);
            } else if (s[i] === ')') {
                while (operators.length > 0 && operators[operators.length - 1] !== '(') {
                    this.compute(operands, operators);
                }
                operators.pop(); // pop '('
            } else if (this.precedence.has(s[i])) {
                while (
                    operators.length > 0 &&
                    this.precedence.has(operators[operators.length - 1]) &&
                    this.precedence.get(operators[operators.length - 1])! >= this.precedence.get(s[i])!
                ) {
                    this.compute(operands, operators);
                }
                operators.push(s[i]);
            }
        }

        while (operators.length > 0) {
            this.compute(operands, operators);
        }

        return operands.pop() || null;
    }

    private compute(operands: Node[], operators: string[]): void {
        const right = operands.pop()!;
        const left = operands.pop()!;
        const op = operators.pop()!;
        operands.push(new Node(op, left, right));
    }
}

// Example usage:
const solution = new Solution();
const expression = "2*(3-1)/2";
const root = solution.expTree(expression);
console.log(root);
