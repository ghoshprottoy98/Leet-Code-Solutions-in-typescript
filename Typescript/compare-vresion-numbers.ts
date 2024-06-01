function compareVersion(version1: string, version2: string): number {
    let v1array: string[] = version1.split('.'),
        v2array: string[] = version2.split('.'),
        exp: RegExp = new RegExp('^0+$');
    
    while (exp.exec(v1array[v1array.length-1])) v1array.pop();
    while (exp.exec(v2array[v2array.length-1])) v2array.pop();
    
    let v1len: number = v1array.length,
        v2len: number = v2array.length,
        minlen: number = Math.min(v1len, v2len);
    
    for (let i = 0; i < minlen; i++) {
        let num1: number = Number.parseInt(v1array[i]),
            num2: number = Number.parseInt(v2array[i]);
        
        if (num1 > num2) return 1;
        else if (num1 < num2) return -1;
    }
    
    if (v1len === v2len) {
        return 0;
    } else {
        return v1len > v2len ? 1 : -1;
    }
}
