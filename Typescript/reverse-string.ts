let reverseString = function(s: string): string {
    let res: string = '';
    
    while (s) {
        res = s.charAt(0) + res;
        s = s.substring(1);
    }
    
    return res;
};
