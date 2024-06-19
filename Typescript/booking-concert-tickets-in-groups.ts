class BookMyShow {
    private st_: SegmentTree;
    private m_: number;
    private i_: number;

    constructor(n: number, m: number) {
        this.st_ = new SegmentTree(n, m);
        this.m_ = m;
        this.i_ = 0;
    }

    gather(k: number, maxRow: number): number[] {
        let i = 1;
        if (k > this.st_.tree[i][0]) {
            return [];
        }
        while (i < this.st_.base) {
            i = 2 * i + (this.st_.tree[2 * i][0] < k ? 1 : 0);
        }
        if (i - this.st_.base > maxRow) {
            return [];
        }
        const cnt = this.st_.tree[i][0];
        const c = this.m_ - cnt;
        i -= this.st_.base;
        this.st_.update(i, [cnt - k, 0]);
        return [i, c];
    }

    scatter(k: number, maxRow: number): boolean {
        if (k > this.st_.query(this.i_, maxRow)[1]) {
            return false;
        }
        for (let i = this.i_; i <= maxRow && k > 0; ++i) {
            let cnt = this.st_.tree[this.st_.base + i][1];
            const c = Math.min(cnt, k);
            cnt -= c;
            if (cnt === 0) {
                ++this.i_;
            }
            this.st_.update(i, [0, cnt]);
            k -= c;
        }
        return true;
    }
}

class SegmentTree {
    private tree: number[][];
    private base: number;

    constructor(N: number, m: number) {
        this.tree = new Array<number[]>(N > 1 ? (1 << (Math.floor(Math.log2(N - 1)) + 2)) : 2);
        this.base = N > 1 ? (1 << (Math.floor(Math.log2(N - 1)) + 1)) : 1;

        for (let i = this.base; i < this.base + N; ++i) {
            this.tree[i] = [m, m];
        }
        for (let i = this.base - 1; i >= 1; --i) {
            this.tree[i] = [Math.max(this.tree[i * 2][0], this.tree[i * 2 + 1][0]), this.tree[i * 2][1] + this.tree[i * 2 + 1][1]];
        }
    }

    update(i: number, h: number[]): void {
        let x = this.base + i;
        this.tree[x] = h;
        while (x > 1) {
            x >>= 1;
            this.tree[x] = [Math.max(this.tree[x * 2][0], this.tree[x * 2 + 1][0]), this.tree[x * 2][1] + this.tree[x * 2 + 1][1]];
        }
    }

    query(L: number, R: number): number[] {
        L += this.base;
        R += this.base;
        let result: number[] = [0, 0];
        for (; L <= R; L >>= 1, R >>= 1) {
            if (L & 1) {
                result = [result[0], result[1] + this.tree[L][1]];
                ++L;
            }
            if (!(R & 1)) {
                result = [result[0], result[1] + this.tree[R][1]];
                --R;
            }
        }
        return result;
    }
}
