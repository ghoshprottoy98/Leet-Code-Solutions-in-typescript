let reverseWords = function(str: string): string {
    let len: number = str.length,
        res: string = '',
        begin: number = 0;
        
    while (begin < len && str.charAt(begin) === ' ') begin++;
    if (begin === len) return res;

    for (let i = begin; i < len;) {
        let space: string = '',
            end: number = begin,
            tmpstr: string = '';

        while (i < len && str.charAt(i) !== ' ') {
            tmpstr += str.charAt(i);
            i++;
        }
        while (i < len && str.charAt(i) === ' ') i++;

        if (i < len) space = ' ';

        res = space + tmpstr + res;
    }

    return res;
};
