function myAtoi(str: string): number {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    let signal = 1; // 1 stands for positive number, -1 stands for negative number
    let res = 0;

    // Trim leading whitespaces
    str = str.trim();

    // Check if string is empty after trimming
    if (str.length === 0) {
        return 0;
    }

    // Check for sign
    if (str[0] === '-') {
        signal = -1;
        str = str.slice(1);
    } else if (str[0] === "+") {
        str = str.slice(1);
    }

    // Parse digits
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= '0' && char <= '9') {
            const digit = Number.parseInt(char);
            res = res * 10 + digit;

            // Check for overflow
            if (signal === 1 && res > INT_MAX) {
                return INT_MAX;
            } else if (signal === -1 && -res < INT_MIN) {
                return INT_MIN;
            }
        } else {
            // Break loop if non-digit encountered
            break;
        }
    }

    return signal * res;
}
