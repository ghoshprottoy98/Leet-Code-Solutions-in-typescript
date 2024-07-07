class Solution {
    private static directions: [number, number][] = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];

    private static DRAW = 0;
    private static MOUSE = 1;
    private static CAT = 2;

    canMouseWin(grid: string[], catJump: number, mouseJump: number): boolean {
        const R = grid.length;
        const C = grid[0].length;
        const N = R * C;
        const WALLS = new Set<number>();
        let FOOD = -1, MOUSE_START = -1, CAT_START = -1;

        for (let r = 0; r < R; ++r) {
            for (let c = 0; c < C; ++c) {
                const pos = r * C + c;
                switch (grid[r][c]) {
                    case 'M':
                        MOUSE_START = pos;
                        break;
                    case 'C':
                        CAT_START = pos;
                        break;
                    case 'F':
                        FOOD = pos;
                        break;
                    case '#':
                        WALLS.add(pos);
                        break;
                }
            }
        }

        const graph: number[][][] = Array.from({ length: N }, () => Array.from({ length: 2 }, () => []));
        const jump = [mouseJump, catJump];
        for (let r = 0; r < R; ++r) {
            for (let c = 0; c < C; ++c) {
                if (grid[r][c] === '#') continue;
                const pos = r * C + c;
                for (const t of [Solution.MOUSE, Solution.CAT]) {
                    for (const [dr, dc] of Solution.directions) {
                        for (let d = 0; d <= jump[t - 1]; ++d) {
                            const nr = r + dr * d, nc = c + dc * d;
                            if (nr < 0 || nr >= R || nc < 0 || nc >= C || grid[nr][nc] === '#') break;
                            graph[pos][t - 1].push(nr * C + nc);
                        }
                    }
                }
            }
        }

        const degree: number[][][] = Array.from({ length: N }, () => Array.from({ length: N }, () => [0, 0]));
        for (let m = 0; m < graph.length; ++m) {
            for (let c = 0; c < graph.length; ++c) {
                degree[m][c][Solution.MOUSE - 1] = graph[m][Solution.MOUSE - 1].length;
                degree[m][c][Solution.CAT - 1] = graph[c][Solution.CAT - 1].length;
            }
        }

        const color: number[][][] = Array.from({ length: N }, () => Array.from({ length: N }, () => [Solution.DRAW, Solution.DRAW]));
        const q: [number, number, number, number][] = [];

        for (let i = 0; i < graph.length; ++i) {
            if (WALLS.has(i) || i === FOOD) continue;
            color[FOOD][i][Solution.CAT - 1] = Solution.MOUSE;
            q.push([FOOD, i, Solution.CAT, Solution.MOUSE]);
            color[i][FOOD][Solution.MOUSE - 1] = Solution.CAT;
            q.push([i, FOOD, Solution.MOUSE, Solution.CAT]);
            for (const t of [Solution.MOUSE, Solution.CAT]) {
                color[i][i][t - 1] = Solution.CAT;
                q.push([i, i, t, Solution.CAT]);
            }
        }

        while (q.length > 0) {
            const [i, j, t, c] = q.shift()!;
            for (const [ni, nj, nt] of this.parents(graph, i, j, t)) {
                if (color[ni][nj][nt - 1] !== Solution.DRAW) continue;
                if (nt === c) {
                    color[ni][nj][nt - 1] = c;
                    q.push([ni, nj, nt, c]);
                    continue;
                }
                degree[ni][nj][nt - 1]--;
                if (degree[ni][nj][nt - 1] === 0) {
                    color[ni][nj][nt - 1] = c;
                    q.push([ni, nj, nt, c]);
                }
            }
        }

        return color[MOUSE_START][CAT_START][Solution.MOUSE - 1] === Solution.MOUSE;
    }

    private parents(graph: number[][][], m: number, c: number, t: number): [number, number, number][] {
        const result: [number, number, number][] = [];
        if (t === Solution.CAT) {
            for (const nm of graph[m][Solution.MOUSE - 1]) {
                result.push([nm, c, Solution.MOUSE]);
            }
        } else {
            for (const nc of graph[c][Solution.CAT - 1]) {
                result.push([m, nc, Solution.CAT]);
            }
        }
        return result;
    }
}
