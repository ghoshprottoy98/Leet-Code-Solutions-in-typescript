class Solution {
    braceExpansionII(expression: string): string[] {
        let i = 0;
        return this.generateWords(expression, i);
    }

    private generateWords(expr: string, i: number): string[] {
        const options: string[][] = [];
        while (i !== expr.length && ",}".indexOf(expr[i]) === -1) {
            const tmp: string[] = [];
            if ("{,}".indexOf(expr[i]) === -1) {
                tmp.push(expr[i]);
                i++;  // a-z
            } else if (expr[i] === '{') {
                tmp.push(...this.generateOption(expr, i));
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
