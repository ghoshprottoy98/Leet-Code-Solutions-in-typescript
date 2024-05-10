class MedianFinder {
    private nums: number[];

    constructor() {
        this.nums = [];
    }

    addNum(num: number): void {
        const bs = (n: number): void => {
            let start = 0;
            let end = this.nums.length;

            while (start < end) {
                let mid = (start + end) >> 1;
                if (n > this.nums[mid]) {
                    start = mid + 1;
                } else {
                    end = mid;
                }
            }
            this.nums.splice(start, 0, n);
        };

        if (this.nums.length) {
            bs(num);
        } else {
            this.nums.push(num);
        }
    }

    findMedian(): number | null {
        const len = this.nums.length;
        return len ? len % 2 ? this.nums[Math.floor(len / 2)] : (this.nums[len / 2] + this.nums[len / 2 - 1]) / 2 : null;
    }
}

// Test code
const obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
const param_2 = obj.findMedian();
console.log(param_2);
