class TrieNode {
    isString: boolean;
    leaves: TrieNode[];

    constructor() {
        this.isString = false;
        this.leaves = new Array(26).fill(null);
    }

    insert(s: string): void {
        let p: TrieNode = this;
        for (const c of s) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!p.leaves[index]) {
                p.leaves[index] = new TrieNode();
            }
            p = p.leaves[index];
        }
        p.isString = true;
    }
}

class Solution {
    boldWords(words: string[], S: string): string {
        const trie = new TrieNode();
        for (const word of words) {
            trie.insert(word);
        }

        const lookup: boolean[] = new Array(S.length).fill(false);
        for (let i = 0; i < S.length; ++i) {
            let curr = trie;
            let k = i - 1;
            for (let j = i; j < S.length; ++j) {
                const index = S[j].charCodeAt(0) - 'a'.charCodeAt(0);
                if (!curr.leaves[index]) {
                    break;
                }
                curr = curr.leaves[index];
                if (curr.isString) {
                    k = j;
                }
            }
            lookup.fill(true, i, k + 1);
        }

        let result = '';
        for (let i = 0; i < S.length; ++i) {
            if (lookup[i] && (i === 0 || !lookup[i - 1])) {
                result += '<b>';
            }
            result += S[i];
            if (lookup[i] && (i === S.length - 1 || !lookup[i + 1])) {
                result += '</b>';
            }
        }
        return result;
    }
}
