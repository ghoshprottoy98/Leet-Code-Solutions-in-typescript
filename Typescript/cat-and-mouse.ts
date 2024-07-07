// Time:  O(n^3)
// Space: O(n^2)

enum Location {
    HOLE,
    MOUSE_START,
    CAT_START
}

enum Result {
    DRAW,
    MOUSE,
    CAT
}

class Solution {
    catMouseGame(graph: number[][]): number {
        const n = graph.length;
        const degree = Array.from({ length: n }, () => Array.from({ length: n }, () => [0, 0]));
        const ignore = new Set(graph[Location.HOLE]);

        for (let m = 0; m < n; ++m) {
            for (let c = 0; c < n; ++c) {
                degree[m][c][Result.MOUSE - 1] = graph[m].length;
                degree[m][c][Result.CAT - 1] = graph[c].length - Number(ignore.has(c));
            }
        }

        const color = Array.from({ length: n }, () => Array.from({ length: n }, () => [Result.DRAW, Result.DRAW]));
        const q: [number, number, number, number][] = [];

        for (let i = 0; i < n; ++i) {
            if (i === Location.HOLE) continue;
            color[Location.HOLE][i][Result.CAT - 1] = Result.MOUSE;
            q.push([Location.HOLE, i, Result.CAT, Result.MOUSE]);
            for (const t of [Result.MOUSE, Result.CAT]) {
                color[i][i][t - 1] = Result.CAT;
                q.push([i, i, t, Result.CAT]);
            }
        }

        while (q.length) {
            const [i, j, t, c] = q.shift()!;
            for (const [ni, nj, nt] of this.parents(graph, i, j, t)) {
                if (color[ni][nj][nt - 1] !== Result.DRAW) continue;
                if (nt === c) {
                    color[ni][nj][nt - 1] = c;
                    q.push([ni, nj, nt, c]);
                    continue;
                }
                --degree[ni][nj][nt - 1];
                if (!degree[ni][nj][nt - 1]) {
                    color[ni][nj][nt - 1] = c;
                    q.push([ni, nj, nt, c]);
                }
            }
        }

        return color[Location.MOUSE_START][Location.CAT_START][Result.MOUSE - 1];
    }

    private parents(graph: number[][], m: number, c: number, t: number): [number, number, number][] {
        const result: [number, number, number][] = [];
        if (t === Result.CAT) {
            for (const nm of graph[m]) {
                result.push([nm, c, Result.MOUSE ^ Result.CAT ^ t]);
            }
        } else {
            for (const nc of graph[c]) {
                if (nc !== Location.HOLE) {
                    result.push([m, nc, Result.MOUSE ^ Result.CAT ^ t]);
                }
            }
        }
        return result;
    }
}
