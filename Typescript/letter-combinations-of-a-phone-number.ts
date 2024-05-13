const letterCombinations = (digits: string): string[] => {
    const size = digits.length;
    const mapping: string[] = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let res: string[] = [''];

    for (let i = 0; i < size; i++) {
        const currentVal: number = parseInt(digits[i]);
        if (currentVal > 1 && currentVal < 10) {
            let tmp: string[] = [];
            const maplen: number = mapping[currentVal].length;
            const reslen: number = res.length;

            for (let j = 0; j < reslen; j++) {
                tmp.push(res[j]);
            }
            res = [];

            for (let j = 0; j < reslen; j++) {
                for (let k = 0; k < maplen; k++) {
                    res.push(tmp[j] + mapping[currentVal][k]);
                }
            }
        }
    }

    if (size < 1 || (res.length === 1 && res[0] === '')) {
        return [];
    }

    return res;
};


const letterCombinations_2 = (digits: string): string[] => {
    const mapping: string[] = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const res: string[] = [];
    const len: number = digits.length;
    if (len < 1) return [];

    const getCombs = (prefix: string, start: number, end: number): string[] => {
        const digitMap: string = mapping[parseInt(digits[start])];
        if (start === end) {
            return digitMap ? digitMap.split('').map(subfix => prefix + subfix) : [prefix];
        } else {
            const subCombs: string[][] = digitMap ? digitMap.split('').map(subfix => getCombs(prefix + subfix, start + 1, end)) : [getCombs(prefix, start + 1, end)];
            return subCombs.reduce((acc: string[], cur: string[]) => acc.concat(cur), []);
        }
    };

    return res.concat(getCombs('', 0, len - 1));
};
