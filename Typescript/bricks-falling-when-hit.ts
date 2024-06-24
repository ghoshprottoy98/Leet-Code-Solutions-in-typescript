// Time:  O(r * c)
// Space: O(r * c)

class UnionFind {
    private parent: number[];
    private size: number[];

    constructor(n: number) {
        this.parent = new Array(n + 1).fill(0).map((_, i) => i);
        this.size = new Array(n + 1).fill(1);
        this.size[n] = 0;
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression.
        }
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) {
            return false;
        }

        this.parent[Math.min(rootX, rootY)] = Math.max(rootX, rootY);
        this.size[Math.max(rootX, rootY)] += this.size[Math.min(rootX, rootY)];
        return true;
    }

    top(): number {
        return this.size[this.find(this.size.length - 1)];
    }
}

class Solution {
    static directions: [number, number][] = [
        [-1, 0], [1, 0], [0, 1], [0, -1]
    ];

    hitBricks(grid: number[][], hits: number[][]): number[] {
        const R = grid.length;
        const C = grid[0].length;
        const index = (r: number, c: number): number => r * C + c;

        const hitGrid = grid.map(row => row.slice());

        for (const hit of hits) {
            hitGrid[hit[0]][hit[1]] = 0;
        }

        const unionFind = new UnionFind(R * C);

        for (let r = 0; r < hitGrid.length; ++r) {
            for (let c = 0; c < hitGrid[r].length; ++c) {
                if (!hitGrid[r][c]) {
                    continue;
                }
                if (r === 0) {
                    unionFind.union(index(r, c), R * C);
                }
                if (r > 0 && hitGrid[r - 1][c]) {
                    unionFind.union(index(r, c), index(r - 1, c));
                }
                if (c > 0 && hitGrid[r][c - 1]) {
                    unionFind.union(index(r, c), index(r, c - 1));
                }
            }
        }

        const result: number[] = [];
        for (let i = hits.length - 1; i >= 0; --i) {
            const [r, c] = hits[i];
            const prevRoof = unionFind.top();
            if (grid[r][c] === 0) {
                result.push(0);
                continue;
            }
            for (const [dr, dc] of Solution.directions) {
                const nr = r + dr, nc = c + dc;
                if (0 <= nr && nr < R && 0 <= nc && nc < C && hitGrid[nr][nc]) {
                    unionFind.union(index(r, c), index(nr, nc));
                }
            }
            if (r === 0) {
                unionFind.union(index(r, c), R * C);
            }
            hitGrid[r][c] = 1;
            result.push(Math.max(0, unionFind.top() - prevRoof - 1));
        }

        return result.reverse();
    }
}
