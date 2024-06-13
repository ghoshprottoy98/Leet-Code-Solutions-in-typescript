class Solution {
    transformArray(arr: number[]): number[] {
        while (this.isChangable(arr)) {
            let newArr = [...arr];
            for (let i = 1; i + 1 < arr.length; ++i) {
                newArr[i] += Number(arr[i - 1] > arr[i] && arr[i] < arr[i + 1]);
                newArr[i] -= Number(arr[i - 1] < arr[i] && arr[i] > arr[i + 1]);
            }
            arr = [...newArr];
        }
        return arr;
    }

    private isChangable(arr: number[]): boolean {
        for (let i = 1; i + 1 < arr.length; ++i) {
            if ((arr[i - 1] > arr[i] && arr[i] < arr[i + 1]) ||
                (arr[i - 1] < arr[i] && arr[i] > arr[i + 1])) {
                return true;
            }
        }
        return false;
    }
}

// Example usage:
const solution = new Solution();
const arr = [6, 2, 3, 4, 5, 6];
console.log(solution.transformArray(arr));  // Output: [6, 3, 3, 4, 5, 6]
