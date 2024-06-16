class Solution {
    calPoints(ops: string[]): number {
        let records: number[] = [];
        
        for (const op of ops) {
            if (op === "+") {
                records.push(records[records.length - 2] + records[records.length - 1]);
            } else if (op === "D") {
                records.push(2 * records[records.length - 1]);
            } else if (op === "C") {
                records.pop();
            } else {
                records.push(parseInt(op));
            }
        }
        
        return records.reduce((acc, cur) => acc + cur, 0);
    }
}
