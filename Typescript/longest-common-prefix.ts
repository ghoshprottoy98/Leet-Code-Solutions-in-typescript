let longestCommonPrefix = function(strs: string[]): string {
    if (strs === '' || strs.length === 0) {
        return '';
    }

    let prefix = '',
        strslen = strs.length,
        strlen = strs[0].length;

    for (let i = 0; i < strlen; i++) {
        let jud = true;

        for (let j = 1; j < strslen; j++) {
            if (strs[j][i] === undefined || strs[j][i] !== strs[0][i]) {
                jud = false;
                break;
            }
        }

        if (jud) {
            prefix += strs[0][i];
        } else {
            return prefix;
        }
    }

    return prefix;
};
