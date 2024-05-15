const restoreIpAddresses = (s: string): string[] => {
    const len = s.length;
    const res: string[] = [];
    if (len < 4) return [];

    for (let first = 1; first < 5; first++) {
        if (first === len) break;
        for (let second = 1; second < 5; second++) {
            if (first + second === len) break;
            for (let third = 1; third < 5; third++) {
                if (first + second + third === len) break;
                const tmp1 = s.substring(0, first);
                const tmp2 = s.substring(first, first + second);
                const tmp3 = s.substring(first + second, first + second + third);
                const tmp4 = s.substring(first + second + third);

                if (isValid(tmp1) && isValid(tmp2) && isValid(tmp3) && isValid(tmp4)) {
                    res.push(`${tmp1}.${tmp2}.${tmp3}.${tmp4}`);
                }
            }
        }
    }

    return res;

    function isValid(str: string): boolean {
        if (str.charAt(0) === '0' && str.length > 1) return false;

        const num = parseInt(str, 10);
        if (num < 256)
            return true;
        else
            return false;
    }
};

// Example usage:
const ipAddress = "25525511135";
console.log(restoreIpAddresses(ipAddress));
