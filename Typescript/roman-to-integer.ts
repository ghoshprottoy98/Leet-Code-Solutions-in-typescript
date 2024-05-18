const romanToInt = (s: string): number => {
    const romanMap: { [key: string]: number } = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };

    let res = 0;
    let i = 0;

    while (i < s.length) {
        if (i + 1 < s.length && romanMap[s.substring(i, i + 2)]) {
            res += romanMap[s.substring(i, i + 2)];
            i += 2;
        } else {
            res += romanMap[s.charAt(i)];
            i += 1;
        }
    }

    return res;
};

// Example usage:
console.log(romanToInt("MCMXCIV")); // 1994
