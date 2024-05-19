function mySqrt(x: number): number {
    if (x <= 1) return x;

    let left = 1, right = x;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        const square = mid * mid;

        if (square === x) return mid;
        else if (square < x) left = mid + 1;
        else right = mid;
    }
    return left - 1;
}

console.log(mySqrt(0)); // 0
console.log(mySqrt(1)); // 1
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
