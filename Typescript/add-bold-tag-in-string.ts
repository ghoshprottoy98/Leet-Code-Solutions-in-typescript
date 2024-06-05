class Solution {
    addBoldTag(s: string, dict: string[]): string {
        const lookup: boolean[] = new Array(s.length).fill(false);
        
        for (const d of dict) {
            let pos = -1;
            while ((pos = s.indexOf(d, pos + 1)) !== -1) {
                lookup.fill(true, pos, pos + d.length);
            }
        }
        
        let result = '';
        for (let i = 0; i < s.length; ++i) {
            if (lookup[i] && (i === 0 || !lookup[i - 1])) {
                result += "<b>";
            }
            result += s[i];
            if (lookup[i] && (i === (s.length - 1) || !lookup[i + 1])) {
                result += "</b>";
            }
        }
        
        return result;
    }
}
