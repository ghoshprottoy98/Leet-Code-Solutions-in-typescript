function maxArea(height: number[]): number {
    const size = height.length;
    let maxVal = 0;
    let left = 0;
    let right = size - 1;
    
    while (left < right) {
        const lVal = height[left];
        const rVal = height[right];
        const currentVal = minVal(lVal, rVal) * (right - left);
        if (maxVal < currentVal) {
            maxVal = currentVal;
        }
        if (lVal > rVal) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    
    return maxVal;
}

function minVal(a: number, b: number): number {
    return a > b ? b : a;
}

function maxValFn(a: number, b: number): number {
    return a > b ? a : b;
}
