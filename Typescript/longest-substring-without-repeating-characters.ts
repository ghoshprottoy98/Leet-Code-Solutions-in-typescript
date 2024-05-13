let lengthOfLongestSubstring = function(s: string): number {
    let strlen: number = s.length;

    if (strlen < 2) {
        return strlen;
    }

    let maxString: string = '', maxLen: number = 1;

    for (let i: number = 0; i < strlen; i++) {
        let substr: string[] = [s[i]], continueJud: boolean = false;

        if (strlen - i <= maxLen) {
            break;
        }

        while (i + 1 < strlen && s[i] === s[i + 1]) {
            i += 1;
            continueJud = true;
        }
        if (continueJud) {
            continueJud = false;
            i -= 1;
            continue;
        }

        for (let j: number = i + 1; j < strlen; j++) {
            if (substr.indexOf(s[j]) !== -1) {
                if (substr.length > maxLen) {
                    maxLen = substr.length;
                    //   maxString = ''.join(substr);
                }

                break;
            }

            substr.push(s[j]);
            if (j === strlen - 1) {
                if (substr.length > maxLen) {
                    maxLen = substr.length;
                }
            }
        }
    }

    return maxLen;
};


let lengthOfLongestSubstring_2 = function(s: string): number {
    let strlen: number = s.length;
    let start: number = 0;
    let strdict: { [key: string]: number } = {};
    let max: number = 0;

    for (let i: number = 0; i < strlen; i++) {
        const e: string = s[i];

        if (strdict[e] !== undefined && strdict[e] >= start) {
            start = strdict[e] + 1;
        } else {
            const curLen: number = i - start + 1;
            max = Math.max(curLen, max);
        }

        strdict[e] = i;
    }
    return max;
}
