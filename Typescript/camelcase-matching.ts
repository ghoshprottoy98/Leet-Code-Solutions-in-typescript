class Solution {
    camelMatch(queries: string[], pattern: string): boolean[] {
        const result: boolean[] = [];
        for (const query of queries) {
            result.push(this.isMatched(query, pattern));
        }
        return result;
    }

    private isMatched(query: string, pattern: string): boolean {
        let i = 0;
        for (const c of query) {
            if (i < pattern.length && pattern[i] === c) {
                i++;
            } else if (this.isUpperCase(c)) {
                return false;
            }
        }
        return i === pattern.length;
    }

    private isUpperCase(c: string): boolean {
        return c >= 'A' && c <= 'Z';
    }
}
