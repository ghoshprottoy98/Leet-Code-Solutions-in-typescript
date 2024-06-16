class Solution {
    beforeAndAfterPuzzles(phrases: string[]): string[] {
        let lookup: Map<string, number[]> = new Map();
        
        // Populate lookup map
        for (let i = 0; i < phrases.length; ++i) {
            let phrase = phrases[i];
            let right = phrase.lastIndexOf(' ');
            let word = (right === -1) ? phrase : phrase.substring(right + 1);
            
            if (!lookup.has(word)) {
                lookup.set(word, []);
            }
            lookup.get(word)!.push(i);
        }
        
        let resultSet: Set<string> = new Set();
        
        // Generate results
        for (let i = 0; i < phrases.length; ++i) {
            let phrase = phrases[i];
            let left = phrase.indexOf(' ');
            let word = (left === -1) ? phrase : phrase.substring(0, left);
            
            if (!lookup.has(word)) {
                continue;
            }
            
            for (let j of lookup.get(word)!) {
                if (j === i) {
                    continue;
                }
                resultSet.add(phrases[j] + phrase.substring(word.length()));
            }
        }
        
        // Convert set to sorted array
        let result: string[] = Array.from(resultSet.values());
        result.sort();
        
        return result;
    }
}
