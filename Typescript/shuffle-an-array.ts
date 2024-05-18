class Solution {
    private nums: number[];
    private length: number;

    constructor(nums: number[]) {
        this.nums = nums;
        this.length = nums.length;
    }

    reset(): number[] {
        return this.nums;
    }

    shuffle(): number[] {
        const shuffleList: number[] = [...this.nums];

        for (let i = 0; i < this.length; i++) {
            const random = (Math.floor(Math.random() * this.length) + i) % this.length;
            let temp = 0;

            if (random === i) {
                continue;
            }

            temp = shuffleList[i];
            shuffleList[i] = shuffleList[random];
            shuffleList[random] = temp;
        }

        return shuffleList;
    }
}

// Usage:
// const nums: number[] = [1, 2, 3];
// const solution = new Solution(nums);
// console.log(solution.shuffle());
// console.log(solution.reset());
// console.log(solution.shuffle());
