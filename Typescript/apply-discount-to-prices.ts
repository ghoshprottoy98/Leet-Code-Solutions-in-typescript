
class Solution {
    discountPrices(sentence: string, discount: number): string {
        const format = (x: string): string => {
            let result = '';
            const integers = (parseInt(x) * (100 - discount) / 100).toString();
            const decimals = (parseInt(x) * (100 - discount) % 100).toString().padStart(2, '0');
            result += '$' + integers + '.' + decimals;
            return result;
        };

        let result = '';
        for (let i = 0, j = -1; i < sentence.length; i = j + 1) {
            j = sentence.indexOf(' ', i);
            if (j === -1) {
                j = sentence.length;
            }
            if (sentence[i] === '$' && j - (i + 1) > 0 && /^[0-9]+$/.test(sentence.slice(i + 1, j))) {
                result += format(sentence.slice(i + 1, j));
            } else {
                result += sentence.slice(i, j);
            }
            if (j !== sentence.length) {
                result += ' ';
            }
        }
        return result;
    }
}

const solution = new Solution();
console.log(solution.discountPrices("sentence", 10)); // Replace "sentence" with your input string and 10 with your discount value
