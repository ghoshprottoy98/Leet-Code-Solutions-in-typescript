class Solution {
    getResults(queries: number[][]): boolean[] {
        const bst: Set<number> = new Set();
        
        for (const q of queries) {
            if (q[0] === 1) {
                bst.add(q[1]);
            }
        }
        
        const val_to_idx: Map<number, number> = new Map();
        let i = 0;
        for (const x of bst) {
            val_to_idx.set(x, i++);
        }
        
        function fn(a: number, b: number): number {
            return Math.max(a, b);
        }
        
        const bit = new BIT<number>(val_to_idx.size, 0, fn);
        
        const bstArray: number[] = Array.from(bst);
        for (let it = 0; it < bstArray.length; ++it) {
            bit.update(val_to_idx.get(bstArray[it])!, bstArray[it] - (it !== 0 ? bstArray[it - 1] : 0));
        }
        
        const result: boolean[] = [];
        for (let i = queries.length - 1; i >= 0; --i) {
            const q = queries[i];
            const it = Array.from(bst).findIndex((val) => val >= q[1]);
            
            if (q[0] === 1) {
                if (it !== -1 && it + 1 < bst.size) {
                    bit.update(val_to_idx.get(bstArray[it + 1])!, bstArray[it + 1] - (it !== 0 ? bstArray[it] : 0));
                }
                bst.delete(bstArray[it]);
            } else {
                result.unshift(q[1] - (it !== -1 && it !== 0 ? bstArray[it - 1] : 0) >= q[2] ||
                                (it !== -1 && it !== 0 && bit.query(val_to_idx.get(bstArray[it - 1])!) >= q[2]));
            }
        }
        
        return result;
    }
}

class BIT<T extends number> {
    bit: T[];
    fn: (a: T, b: T) => T;

    constructor(n: number, val: T, fn: (a: T, b: T) => T) {
        this.bit = new Array(n + 1).fill(val);
        this.fn = fn;
    }

    update(i: number, val: T): void {
        ++i;
        for (; i < this.bit.length; i += this.lowerBit(i)) {
            this.bit[i] = this.fn(this.bit[i], val);
        }
    }

    query(i: number): T {
        ++i;
        let total = this.bit[0];
        for (; i > 0; i -= this.lowerBit(i)) {
            total = this.fn(total, this.bit[i]);
        }
        return total;
    }

    private lowerBit(i: number): number {
        return i & -i;
    }
}
