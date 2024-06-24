class Solution {
    leastBricks(wall: number[][]): number {
        const widths = new Map<number, number>();
        let result = wall.length;

        for (const row of wall) {
            let width = 0;
            for (let i = 0; i < row.length - 1; ++i) {
                width += row[i];
                widths.set(width, (widths.get(width) || 0) + 1);
                result = Math.min(result, wall.length - widths.get(width)!);
            }
        }

        return result;
    }
}
