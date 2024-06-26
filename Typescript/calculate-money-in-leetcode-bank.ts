class Solution {
    totalMoney(n: number): number {
        const cost: number = 1;
        const day: number = 7;

        const arithmeticSequenceSum = (a: number, d: number, n: number): number => {
            return (2 * a + (n - 1) * d) * n / 2;
        };

        let firstWeekCost: number = arithmeticSequenceSum(cost, cost, day);
        let week: number = Math.floor(n / day);
        let remainDay: number = n % day;

        return arithmeticSequenceSum(firstWeekCost, cost * day, week) +
               arithmeticSequenceSum(cost * (week + 1), cost, remainDay);
    }
}
