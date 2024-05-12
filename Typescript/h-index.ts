const hIndex = (citations: number[]): number => {
    const arrLen: number = citations.length;
    const count: number[] = new Array<number>(arrLen + 1);

    for (let index: number = 0; index < arrLen; index++) {
        const element: number = citations[index];
        const realNum: number = Math.min(element, arrLen);
        count[realNum] = (count[realNum] || 0) + 1;
    }

    let sk: number = count[arrLen] || 0;
    let resIndex: number = arrLen;
    while (sk < resIndex) {
        resIndex--;
        sk += count[resIndex] || 0;
    }

    // console.log(count);
    return resIndex;
};
