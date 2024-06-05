class TrieNode {
    isString: boolean;
    leaves: Map<string, TrieNode>;

    constructor() {
        this.isString = false;
        this.leaves = new Map();
    }
}

class WordDictionary {
    private root_: TrieNode;

    constructor() {
        this.root_ = new TrieNode();
        this.root_.isString = true;
    }

    // Adds a word into the data structure.
    addWord(word: string): void {
        let p: TrieNode | undefined = this.root_;
        for (const c of word) {
            if (!p.leaves.has(c)) {
                p.leaves.set(c, new TrieNode());
            }
            p = p.leaves.get(c);
        }
        if (p) {
            p.isString = true;
        }
    }

    // Returns if the word is in the data structure. A word could
    // contain the dot character '.' to represent any one letter.
    search(word: string): boolean {
        return this.searchWord(word, this.root_, 0);
    }

    private searchWord(word: string, node: TrieNode | undefined, s: number): boolean {
        if (!node) {
            return false;
        }
        if (s === word.length) {
            return node.isString;
        }
        // Match the char.
        if (node.leaves.has(word[s])) {
            return this.searchWord(word, node.leaves.get(word[s]), s + 1);
        } else if (word[s] === '.') {  // Skip the char.
            for (const [key, value] of node.leaves.entries()) {
                if (this.searchWord(word, value, s + 1)) {
                    return true;
                }
            }
        }
        return false;
    }
}

// Your WordDictionary object will be instantiated and called as such:
// let wordDictionary = new WordDictionary();
// wordDictionary.addWord("word");
// wordDictionary.search("pattern");
