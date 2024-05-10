const firstMissingPositive = (nums: number[]): number => {
    const arrLen: number = nums.length;
    const newArray: number[] = new Array(arrLen);

    for (let index = 0; index < arrLen; index++) {
        const element: number = nums[index];

        if (element > 0 && element <= arrLen) {
            newArray[element - 1] = (newArray[element - 1] > 0 ? newArray[element - 1] + 1 : 1);
        }
    }

    let i: number = 0;
    while (newArray[i] && i < arrLen) {
        i++;
    }

    return i + 1;
};