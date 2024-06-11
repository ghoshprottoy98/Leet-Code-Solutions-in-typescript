// Time:  O(nlogr), r is the max position
// Space: O(r)

class SegmentTree<T> {
    base_: number;
    H_: number;
    tree_: Array<T>;
    lazy_: Array<T>;
    count_: Array<T>;
    query_fn_: (x: T, y: T) => T;
    update_fn_: (x: T, y: T) => T;

    constructor(
        N: number,
        query_fn: (x: T, y: T) => T,
        update_fn: (x: T, y: T) => T
    ) {
        this.base_ = N;
        this.tree_ = new Array(2 * N);
        this.lazy_ = new Array(2 * N);
        this.count_ = new Array(2 * N).fill(1);
        this.query_fn_ = query_fn;
        this.update_fn_ = update_fn;
        this.H_ = 1;
        while ((1 << this.H_) < N) {
            this.H_++;
        }
        for (let i = N - 1; i >= 1; --i) {
            this.count_[i] = this.count_[2 * i] + this.count_[2 * i + 1];
        }
    }

    update(L: number, R: number, val: T): void {
        L += this.base_;
        R += this.base_;
        this.push(L);
        this.push(R);
        const L0 = L;
        const R0 = R;
        for (; L <= R; L >>= 1, R >>= 1) {
            if ((L & 1) === 1) {
                this.apply(L++, val);
            }
            if ((R & 1) === 0) {
                this.apply(R--, val);
            }
        }
        this.pull(L0);
        this.pull(R0);
    }

    query(L: number, R: number): T {
        let result: T = {} as T;
        if (L > R) {
            return result;
        }
        L += this.base_;
        R += this.base_;
        this.push(L);
        this.push(R);
        for (; L <= R; L >>= 1, R >>= 1) {
            if ((L & 1) === 1) {
                result = this.query_fn_(result, this.tree_[L++]);
            }
            if ((R & 1) === 0) {
                result = this.query_fn_(result, this.tree_[R--]);
            }
        }
        return result;
    }

    private apply(x: number, val: T): void {
        this.tree_[x] = this.update_fn_(this.tree_[x], val * this.count_[x]);
        if (x < this.base_) {
            this.lazy_[x] = this.update_fn_(this.lazy_[x], val);
        }
    }

    private pull(x: number): void {
        while (x > 1) {
            x >>= 1;
            this.tree_[x] = this.query_fn_(this.tree_[x * 2], this.tree_[x * 2 + 1]);
            if (this.lazy_[x]) {
                this.tree_[x] = this.update_fn_(this.tree_[x], this.lazy_[x] * this.count_[x]);
            }
        }
    }

    private push(x: number): void {
        for (let h = this.H_; h > 0; --h) {
            const y = x >> h;
            if (this.lazy_[y]) {
                this.apply(y * 2, this.lazy_[y]);
                this.apply(y * 2 + 1, this.lazy_[y]);
                this.lazy_[y] = 0;
            }
        }
    }
}

class Solution {
    amountPainted(paint: Array<Array<number>>): Array<number> {
        const query = (x: number, y: number) => x + y;
        const update = (x: number, y: number) => y;
        const max_pos = Math.max(...paint.map(x => x[1]));
        const st = new SegmentTree<number>(max_pos, query, update);
        const result: Array<number> = [];
        for (const x of paint) {
            const cnt = st.query(x[0], x[1] - 1);
            st.update(x[0], x[1] - 1, 1);
            result.push(st.query(x[0], x[1] - 1) - cnt);
        }
        return result;
    }
}
