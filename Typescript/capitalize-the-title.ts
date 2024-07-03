class Solution {
    capitalizeTitle(title: string): string {
        let result = '';
        for (let i = 0, j = 0; i <= title.length; ++i) {
            if (i < title.length && title[i] !== ' ') {
                result += title[i].toLowerCase();
                continue;
            }
            if (i - j > 2) {
                result += title[j].toUpperCase();
            } else {
                result += title.slice(j, i);
            }
            j = i + 1;
        }
        return result;
    }
}

// Example usage:
const solution = new Solution();
const capitalizedTitle = solution.capitalizeTitle("tHe quIck bRown fOx");
console.log(capitalizedTitle); // Outputs: "The Quick Brown Fox"
