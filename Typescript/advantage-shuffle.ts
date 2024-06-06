
// Time:  O(nlogn)
// Space: O(n)

function advantageCount(A: number[], B: number[]): number[] {
    const sortedA = A.slice().sort((a, b) => a - b);
    const sortedB = B.slice().sort((a, b) => a - b);
    const candidates = new Map<number, number[]>();
    const others: number[] = [];

    let j = 0;
    for (const a of sortedA) {
        if (a > sortedB[j]) {
            if (!candidates.has(sortedB[j])) candidates.set(sortedB[j], []);
            candidates.get(sortedB[j])!.push(a);
            j++;
        } else {
            others.push(a);
        }
    }

    const result: number[] = [];
    for (const b of B) {
        if (candidates.has(b) && candidates.get(b)!.length) {
            result.push(candidates.get(b)!.pop()!);
        } else {
            result.push(others.pop()!);
        }
    }
    return result;
}
