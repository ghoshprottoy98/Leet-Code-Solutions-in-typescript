
class Solution {
    alienOrder(words: string[]): string {
        const nodes: Set<string> = new Set();
        const inDegree: Map<string, Set<string>> = new Map();
        const outDegree: Map<string, Set<string>> = new Map();
        const zeroInDegreeQueue: string[] = [];

        for (const word of words) {
            for (const char of word) {
                nodes.add(char);
            }
        }

        for (let i = 1; i < words.length; ++i) {
            if (words[i - 1].length > words[i].length &&
                words[i - 1].substring(0, words[i].length) === words[i]) {
                return "";
            }
            this.findEdges(words[i - 1], words[i], inDegree, outDegree);
        }

        for (const node of nodes) {
            if (!inDegree.has(node)) {
                zeroInDegreeQueue.push(node);
            }
        }

        let result = '';
        while (zeroInDegreeQueue.length > 0) {
            const precedence = zeroInDegreeQueue.shift()!;
            result += precedence;

            if (outDegree.has(precedence)) {
                for (const char of outDegree.get(precedence)!) {
                    inDegree.get(char)!.delete(precedence);
                    if (inDegree.get(char)!.size === 0) {
                        zeroInDegreeQueue.push(char);
                    }
                }
                outDegree.delete(precedence);
            }
        }

        if (outDegree.size > 0) {
            return "";
        }

        return result;
    }

    private findEdges(word1: string, word2: string, 
                      inDegree: Map<string, Set<string>>, 
                      outDegree: Map<string, Set<string>>): void {
        const len = Math.min(word1.length, word2.length);
        for (let i = 0; i < len; ++i) {
            if (word1[i] !== word2[i]) {
                if (!inDegree.has(word2[i])) {
                    inDegree.set(word2[i], new Set());
                }
                inDegree.get(word2[i])!.add(word1[i]);

                if (!outDegree.has(word1[i])) {
                    outDegree.set(word1[i], new Set());
                }
                outDegree.get(word1[i])!.add(word2[i]);
                break;
            }
        }
    }
}
