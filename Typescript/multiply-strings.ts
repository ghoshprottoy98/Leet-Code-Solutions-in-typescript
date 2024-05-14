const multiply = (num1: string, num2: string): string => {
    const len1: number = num1.length;
    const len2: number = num2.length;
    const maxlen: number = len1 > len2 ? len1 : len2;
    const res: number[] = [0];
    const base: number[] = num1.split('').map(e => Number.parseInt(e));
    let shift: number = 0;

    for (let i: number = len2 - 1; i >= 0; i--) {
        const tmp: number[] = [];
        let carrybit: number = 0;
        const mpler: number = Number.parseInt(num2.charAt(i));

        if (mpler === 0) {
            shift++;
            continue;
        }
        for (let j: number = len1 - 1; j >= 0; j--) {
            const prd: number = base[j] * mpler + carrybit;
            carrybit = Math.floor(prd / 10);
            tmp.push(prd % 10);
        }
        if (carrybit) tmp.push(carrybit);
        let tmplen: number = tmp.length + shift;

        for (let j: number = tmplen - res.length; j > 0; j--) {
            res.push(0);
        }

        tmplen = tmp.length;
        carrybit = 0;
        for (let j: number = 0; j < tmplen; j++) {
            let current: number = res[j + shift] + tmp[j] + carrybit;
            res[j + shift] = current % 10;
            if (current > 9) {
                carrybit = 1;
            } else {
                carrybit = 0;
            }
        }
        if (carrybit) res.push(1);
        shift++;
    }

    while (res[res.length - 1] === 0 && res.length > 1) {
        res.pop();
    }

    return res.reverse().join('');
};
