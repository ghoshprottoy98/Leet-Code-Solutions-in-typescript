// Time:  O(p*l * log(p*l)), p is the production of all number of options
//                         , l is the length of a word
// Space: O(p*l)

class Solution {
    expand(S: string): string[] {  // nested is fine
        let i = 0;
        return this.generateWords(S, i);
    }

    private generateWords(expr: string, i: number): string[] {
        const options: string[][] = [];
        while (i !== expr.length && !",}".includes(expr[i])) {
            let tmp: string[] = [];
            if (!"{,}".includes(expr[i])) {
                tmp.push(expr[i]);
                i++;  // a-z
            } else if (expr[i] === '{') {
                tmp = this.generateOption(expr, i);
            }
            options.push(tmp);
        }
        return this.formWords(options);
    }

    private generateOption(expr: string, i: number): string[] {
        const optionSet: Set<string> = new Set();
        while (i !== expr.length && expr[i] !== '}') {
            i++;  // { or ,
            for (const option of this.generateWords(expr, i)) {
                optionSet.add(option);
            }
        }
        i++;  // }
        return Array.from(optionSet);
    }

    private formWords(options: string[][]): string[] {
        const wordsSet: Set<string> = new Set();
        let total = 1;
        for (const opt of options) {
            total *= opt.length;
        }
        for (let i = 0; i < total; ++i) {
            const tmp: string[] = [];
            let curr = i;
            for (let j = options.length - 1; j >= 0; --j) {
                tmp.push(options[j][curr % options[j].length]);
                curr = Math.floor(curr / options[j].length);
            }
            tmp.reverse();
            wordsSet.add(tmp.join(''));
        }
        return Array.from(wordsSet);
    }
}

// Example usage:
const solution = new Solution();
const result = solution.expand("{a,b}c{d,e}f");
console.log(result);
