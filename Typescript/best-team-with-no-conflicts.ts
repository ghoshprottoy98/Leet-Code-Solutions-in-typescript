// Time:  O(n log n)
// Space: O(n)

class SegmentTree {
    private N: number;
    private H: number;
    private tree: number[];
    private lazy: number[];
  
    constructor(N: number) {
      this.N = N;
      this.tree = new Array(2 * N).fill(0);
      this.lazy = new Array(N).fill(0);
  
      this.H = 1;
      while ((1 << this.H) < N) {
        this.H++;
      }
    }
  
    public update(L: number, R: number, h: number): void {
      L += this.N;
      R += this.N;
      const L0 = L;
      const R0 = R;
  
      while (L <= R) {
        if ((L & 1) === 1) {
          this.apply(L++, h);
        }
        if ((R & 1) === 0) {
          this.apply(R--, h);
        }
        L >>= 1;
        R >>= 1;
      }
  
      this.pull(L0);
      this.pull(R0);
    }
  
    public query(L: number, R: number): number {
      L += this.N;
      R += this.N;
      let result = 0;
      this.push(L);
      this.push(R);
  
      while (L <= R) {
        if ((L & 1) === 1) {
          result = Math.max(result, this.tree[L++]);
        }
        if ((R & 1) === 0) {
          result = Math.max(result, this.tree[R--]);
        }
        L >>= 1;
        R >>= 1;
      }
  
      return result;
    }
  
    private apply(x: number, val: number): void {
      this.tree[x] = Math.max(this.tree[x], val);
      if (x < this.N) {
        this.lazy[x] = Math.max(this.lazy[x], val);
      }
    }
  
    private pull(x: number): void {
      while (x > 1) {
        x >>= 1;
        this.tree[x] = Math.max(this.tree[x * 2], this.tree[x * 2 + 1]);
        this.tree[x] = Math.max(this.tree[x], this.lazy[x]);
      }
    }
  
    private push(x: number): void {
      for (let h = this.H; h > 0; h--) {
        const y = x >> h;
        if (this.lazy[y] > 0) {
          this.apply(y * 2, this.lazy[y]);
          this.apply(y * 2 + 1, this.lazy[y]);
          this.lazy[y] = 0;
        }
      }
    }
  }
  
  class Solution {
    public bestTeamScore(scores: number[], ages: number[]): number {
      const players: [number, number][] = [];
      for (let i = 0; i < scores.length; i++) {
        players.push([scores[i], ages[i]]);
      }
  
      players.sort((a, b) => a[0] - b[0]); // Sort by score (ascending)
  
      const sortedAges = new Set(ages);
      const lookup: { [key: number]: number } = {};
      let counter = 0;
      for (const age of sortedAges) {
        lookup[age] = counter++;
      }
  
      const segmentTree = new SegmentTree(lookup.size);
      let result = 0;
      for (const [score, age] of players) {
        segmentTree.update(lookup[age], lookup[age], segmentTree.query(0, lookup[age]) + score);
      }
  
      return segmentTree.query(0, lookup.size - 1);
    }
  }
  