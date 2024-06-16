class Solution {
    private static INF: number = Number.MAX_SAFE_INTEGER;

    private static vectorHash(v: number[]): number {
        let seed = 0;
        for (const i of v) {
            seed ^= i + 0x9e3779b9 + (seed << 6) + (seed >> 2);
        }
        return seed;
    }

    public beautifulPair(nums1: number[], nums2: number[]): number[] {
        const points: number[][] = [];
        for (let i = 0; i < nums1.length; ++i) {
            points.push([nums1[i], nums2[i], i]);
        }
        let result: number[] = [Solution.INF, Solution.INF, Solution.INF];
        const lookup: Map<number[], number> = new Map();

        for (let i = points.length - 1; i >= 0; --i) {
            const key = [points[i][0], points[i][1]];
            const hashedKey = Solution.vectorHash(key);
            if (lookup.has(key)) {
                result = this.min(result, [0, i, lookup.get(key)!]);
            }
            lookup.set(key, i);
        }

        if (result[0] === 0) {
            return [result[1], result[2]];
        }

        const order: number[] = Array.from(Array(points.length).keys());
        order.sort((a, b) => this.comparePoints(points[a], points[b]));

        const dist = (a: number[], b: number[]): number[] => {
            if (a[2] > b[2]) {
                [a, b] = [b, a];
            }
            return [Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]), a[2], b[2]];
        };

        const improve = (): boolean => {
            const localLookup: Map<number[], number[]> = new Map();
            for (const p of points) {
                const size = result[0] / 2.0;
                const i = Math.floor(p[0] / size);
                const j = Math.floor(p[1] / size);
                for (let ni = i - 2; ni <= i + 2; ++ni) {
                    for (let nj = j - 2; nj <= j + 2; ++nj) {
                        const key = [ni, nj];
                        const hashedKey = Solution.vectorHash(key);
                        if (!localLookup.has(key)) {
                            continue;
                        }
                        const d = dist(p, localLookup.get(key)!);
                        if (this.compareResults(d, result) < 0) {
                            result = d;
                            return true;
                        }
                    }
                }
                localLookup.set([i, j], p);
            }
            return false;
        };

        points.sort(() => Math.random() - 0.5);
        result = dist(points[0], points[1]);
        while (improve());
        return [result[1], result[2]];
    }

    private comparePoints(a: number[], b: number[]): number {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    }

    private compareResults(a: number[], b: number[]): number {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    }

    private min(a: number[], b: number[]): number[] {
        return this.compareResults(a, b) < 0 ? a : b;
    }
}
