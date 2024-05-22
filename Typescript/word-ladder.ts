function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    wordList.push(endWord);
    const toVisit: Set<string> = new Set();
    const wordDict: Set<string> = new Set(wordList);
    let dist: number = 2;
    
    if (wordList.length === wordDict.size) return 0;
    addNextWords(beginWord, wordDict, toVisit);
    
    while (toVisit.size > 0) {
        const entriesLen: number = toVisit.size;
        let mark: number = 0;
        
        for (let item of toVisit.values()) {
            if (mark++ === entriesLen) break;
            toVisit.delete(item);
            
            if (item === endWord) return dist;
            addNextWords(item, wordDict, toVisit);
        }
        
        dist++;
    }
    
    return 0;
}

function addNextWords(word: string, wordDict: Set<string>, toVisit: Set<string>): void {
    wordDict.delete(word);
    const len: number = word.length;
    
    for (let i = 0; i < len; i++) {
        for (let j = 97; j < 123; j++) {
            const tmp: string = word.substring(0, i) + String.fromCharCode(j) + word.substring(i + 1, len);
            if (wordDict.has(tmp)) {
                toVisit.add(tmp);
                wordDict.delete(tmp);
            }
        }
    }
}
