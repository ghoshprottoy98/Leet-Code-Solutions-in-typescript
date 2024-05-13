let longestPalindrome = function(s: string): string {
    let len: number = s.length,
        end: number = len - 1,
        sarray: string[] = s.split('');

    if (len < 2) {
        return s;
    }

    let resfrom: number = 0,
        resto: number = 0;

    for (let i: number = 0; i < end; i++) {
        expandPalindrome(i, i);
        if (sarray[i] === sarray[i + 1]) {
            expandPalindrome(i, i + 1);
        }
    }

    return s.substring(resfrom, resto + 1);

    function expandPalindrome(start: number, stop: number): void {
        while (start > 0 && stop < end) {
            if (sarray[start - 1] === sarray[stop + 1]) {
                start--;
                stop++;
            } else {
                break;
            }
        }

        if (stop - start > resto - resfrom) {
            resfrom = start;
            resto = stop;
        }
    }
};
