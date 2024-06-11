class Solution {
    mostVisitedPattern(username: string[], timestamp: number[], website: string[]): string[] {
        let A: [number, string, string][] = [];
        for (let i = 0; i < username.length; ++i) {
            A.push([timestamp[i], username[i], website[i]]);
        }
        A.sort((a, b) => a[0] - b[0]);
        
        let users: { [key: string]: string[] } = {};
        for (const [t, u, w] of A) {
            if (!(u in users)) {
                users[u] = [];
            }
            users[u].push(w);
        }
        
        let result: string[] = [];
        let count: { [key: string]: number } = {};
        for (const u of Object.keys(users)) {
            let lookup: { [key: string]: boolean } = {};
            for (let i = 0; i + 2 < users[u].length; ++i) {
                for (let j = i + 1; j + 1 < users[u].length; ++j) {
                    for (let k = j + 1; k < users[u].length; ++k) {
                        let pattern = [users[u][i], users[u][j], users[u][k]];
                        let patternStr = pattern.join(',');
                        if (lookup[patternStr]) {
                            continue;
                        }
                        lookup[patternStr] = true;
                        count[patternStr] = (count[patternStr] || 0) + 1;
                        if (result.length === 0 ||
                            count[patternStr] > count[result.join(',')] ||
                            (count[patternStr] === count[result.join(',')] && patternStr < result.join(','))) {
                            result = pattern;
                        }
                    }
                }
            }
        }
        return result;
    }
}
