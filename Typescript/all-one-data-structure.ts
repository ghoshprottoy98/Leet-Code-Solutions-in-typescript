// Time:  O(1), per operation
// Space: O(k)

class AllOne {
    buckets: { value: number; keys: Set<string> }[];
    bucketOfKey: Map<string, number>;

    constructor() {
        this.buckets = [];
        this.bucketOfKey = new Map();
    }

    inc(key: string): void {
        if (!this.bucketOfKey.has(key)) {
            this.bucketOfKey.set(key, 0);
            this.buckets.unshift({ value: 0, keys: new Set([key]) });
        }

        let nextIndex = this.bucketOfKey.get(key)! + 1;
        let nextBucket = this.buckets[nextIndex];
        if (!nextBucket || nextBucket.value !== this.buckets[nextIndex - 1].value + 1) {
            nextBucket = { value: this.buckets[nextIndex - 1].value + 1, keys: new Set() };
            this.buckets.splice(nextIndex, 0, nextBucket);
        }
        nextBucket.keys.add(key);
        this.bucketOfKey.set(key, nextIndex);

        const currentBucket = this.buckets[this.bucketOfKey.get(key)! - 1];
        currentBucket.keys.delete(key);
        if (currentBucket.keys.size === 0) {
            this.buckets.splice(this.bucketOfKey.get(key)! - 1, 1);
        }
    }

    dec(key: string): void {
        if (!this.bucketOfKey.has(key)) return;

        const currentIndex = this.bucketOfKey.get(key)!;
        const currentBucket = this.buckets[currentIndex];
        this.bucketOfKey.delete(key);
        if (currentBucket.value > 1) {
            let prevIndex = currentIndex - 1;
            let prevBucket = this.buckets[prevIndex];
            if (!prevBucket || prevBucket.value !== currentBucket.value - 1) {
                prevBucket = { value: currentBucket.value - 1, keys: new Set() };
                this.buckets.splice(prevIndex + 1, 0, prevBucket);
            }
            prevBucket.keys.add(key);
            this.bucketOfKey.set(key, prevIndex + 1);
        }

        currentBucket.keys.delete(key);
        if (currentBucket.keys.size === 0) {
            this.buckets.splice(currentIndex, 1);
        }
    }

    getMaxKey(): string {
        return this.buckets.length === 0 ? "" : Array.from(this.buckets[this.buckets.length - 1].keys)[0];
    }

    getMinKey(): string {
        return this.buckets.length === 0 ? "" : Array.from(this.buckets[0].keys)[0];
    }
}

const obj = new AllOne();
obj.inc("hello");
obj.inc("world");
obj.inc("hello");
console.log(obj.getMaxKey()); // Output: "hello"
console.log(obj.getMinKey()); // Output: "world"
obj.dec("hello");
console.log(obj.getMaxKey()); // Output: "world"
console.log(obj.getMinKey()); // Output: "world"
