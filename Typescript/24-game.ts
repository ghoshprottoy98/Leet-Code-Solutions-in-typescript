class Fraction {
    private numerator: number;
    private denominator: number;

    constructor(n: number, d: number = 1) {
        this.numerator = n;
        this.denominator = d;
    }

    setNum(value: number): void {
        this.numerator = value;
    }

    setDen(value: number): void {
        this.denominator = value;
    }

    getNum(): number {
        return this.numerator;
    }

    getDen(): number {
        return this.denominator;
    }

    reduce(): void {
        const gcd = this.calculateGCD(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
    }

    private calculateGCD(a: number, b: number): number {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            const tmp = b;
            b = a % b;
            a = tmp;
        }
        return a;
    }

    add(rhs: Fraction): Fraction {
        const result = new Fraction(0);

        result.setNum((this.numerator * rhs.getDen()) + (this.denominator * rhs.getNum()));
        result.setDen(this.denominator * rhs.getDen());

        result.reduce();

        return result;
    }

    subtract(rhs: Fraction): Fraction {
        const result = new Fraction(0);

        result.setNum((this.numerator * rhs.getDen()) - (this.denominator * rhs.getNum()));
        result.setDen(this.denominator * rhs.getDen());

        result.reduce();

        return result;
    }

    multiply(rhs: Fraction): Fraction {
        const result = new Fraction(0);

        result.setNum(this.numerator * rhs.getNum());
        result.setDen(this.denominator * rhs.getDen());

        result.reduce();

        return result;
    }

    divide(rhs: Fraction): Fraction {
        const result = new Fraction(0);

        result.setNum(this.numerator * rhs.getDen());
        result.setDen(this.denominator * rhs.getNum());

        result.reduce();

        return result;
    }

    equals(rhs: Fraction): boolean {
        return ((this.numerator * rhs.getDen()) - (rhs.getNum() * this.denominator)) === 0;
    }

    toString(): string {
        return this.numerator + "/" + this.denominator;
    }
}

class Solution {
    judgePoint24(nums: number[]): boolean {
        const fractions = nums.map(num => new Fraction(num));
        return this.dfs(fractions);
    }

    private dfs(nums: Fraction[]): boolean {
        if (nums.length === 1) {
            return nums[0].equals(new Fraction(24));
        }

        const ops: { [key: string]: (a: Fraction, b: Fraction) => Fraction } = {
            '+': (a, b) => a.add(b),
            '-': (a, b) => a.subtract(b),
            '*': (a, b) => a.multiply(b),
            '/': (a, b) => a.divide(b),
        };

        for (let i = 0; i < nums.length; ++i) {
            for (let j = 0; j < nums.length; ++j) {
                if (i === j) {
                    continue;
                }
                const nextNums: Fraction[] = [];
                for (let k = 0; k < nums.length; ++k) {
                    if (k === i || k === j) {
                        continue;
                    }
                    nextNums.push(nums[k]);
                }
                for (const op in ops) {
                    if (((op === '+' || op === '*') && i > j) ||
                        (op === '/' && nums[j].getNum() === 0)) {
                        continue;
                    }
                    nextNums.push(ops[op](nums[i], nums[j]));
                    if (this.dfs(nextNums)) {
                        return true;
                    }
                    nextNums.pop();
                }
            }
        }
        return false;
    }
}
