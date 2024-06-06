// Time:  O(m + n)
// Space: O(1)

class PolyNode {
    constructor(
        public coefficient: number = 0,
        public power: number = 0,
        public next: PolyNode | null = null
    ) {}
}

class Solution {
    addPoly(poly1: PolyNode | null, poly2: PolyNode | null): PolyNode | null {
        const dummy = new PolyNode();
        let curr: PolyNode | null = dummy;
        while (poly1 && poly2) {
            if (poly1.power > poly2.power) {
                curr.next = poly1;
                curr = curr.next;
                poly1 = poly1.next;
            } else if (poly1.power < poly2.power) {
                curr.next = poly2;
                curr = curr.next;
                poly2 = poly2.next;
            } else {
                const coef = poly1.coefficient + poly2.coefficient;
                if (coef) {
                    curr.next = new PolyNode(coef, poly1.power);
                    curr = curr.next;
                }
                poly1 = poly1.next;
                poly2 = poly2.next;
            }
        }
        curr.next = poly1 ? poly1 : poly2;
        return dummy.next;
    }
}
