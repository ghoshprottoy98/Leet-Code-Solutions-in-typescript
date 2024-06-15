class Solution {
    private static readonly directions: [number, number][] = [
        [0, 1], 
        [1, 0], 
        [0, -1], 
        [-1, 0]
    ];

    maxDistance(grid: number[][]): number {
        const queue: [number, number][] = [];
        
        for (let i = 0; i < grid.length; ++i) {
            for (let j = 0; j < grid[i].length; ++j) {
                if (grid[i][j] === 1) {
                    queue.push([i, j]);
                }
            }
        }
        
        if (queue.length === grid.length * grid[0].length) {
            return -1;
        }
        
        let level = -1;

        while (queue.length > 0) {
            const nextQueue: [number, number][] = [];

            while (queue.length > 0) {
                const [x, y] = queue.shift()!;
                
                for (const [dx, dy] of Solution.directions) {
                    const nx = x + dx;
                    const ny = y + dy;
                    
                    if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === 0) {
                        nextQueue.push([nx, ny]);
                        grid[nx][ny] = 1;
                    }
                }
            }

            queue.push(...nextQueue);
            ++level;
        }
        
        return level;
    }
}