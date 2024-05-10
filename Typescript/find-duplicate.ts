const findDuplicate = (nums: number[]): number => {
    let tortoise: number = nums[0];
    let hare: number = nums[0];

    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);

    hare = nums[0];
    while (tortoise !== hare) {
        hare = nums[hare];
        tortoise = nums[tortoise];
    }

    return tortoise;
};