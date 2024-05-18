let searchRange = function(nums: number[], target: number): number[] {
    let arrlen = nums.length;
    if (!arrlen) {
        return [-1, -1];
    }
    
    let leftIndex = binarySearch(nums, 0, arrlen-1, target, 'l'), rightIndex: number;
    if (leftIndex === -1) {
        return [-1, -1];
    } else {
        rightIndex = binarySearch(nums, leftIndex, arrlen-1, target, 'r');
    }
    
    return [leftIndex, rightIndex];
};

let binarySearch = function(nums: number[], begin: number, end: number, target: number, type: string): number {
    let arrlen = nums.length;
    while (begin <= end) {
        let mid = begin + Math.floor( (end-begin)/2 ),
            midVal = nums[mid];
        
        if (midVal === target) {
            switch (type) {
                case 'l':
                    if (mid === 0 || nums[mid-1] !== target) {
                        return mid;
                    } else {
                        end = mid-1;
                    }
                    break;
                default:
                    if (mid === arrlen-1 || nums[mid+1] !== target) {
                        return mid;
                    } else {
                        begin = mid+1;
                    }
                    break;
            }
        } else if (midVal > target) {
            end = mid-1;
        } else if (midVal < target) {
            begin = mid+1;
        }
    }
    
    return -1;
};
