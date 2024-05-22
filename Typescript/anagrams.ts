function groupAnagrams(strs: string[]): string[][] {
    const len = strs.length;
    if (!len) return [];
  
    const hashmap: Map<string, string[]> = new Map();
    for (let i = 0; i < len; i++) {
      const sortedStr = strs[i]
        .split('')
        .sort()
        .join('');
  
      if (!hashmap.has(sortedStr)) {
        hashmap.set(sortedStr, [strs[i]]);
      } else {
        const existingAnagrams = hashmap.get(sortedStr)!; // Type assertion for non-null
        existingAnagrams.push(strs[i]);
      }
    }
  
    const res: string[][] = [];
    for (const [_, value] of hashmap) {
      res.push(value);
    }
  
    return res;
  }