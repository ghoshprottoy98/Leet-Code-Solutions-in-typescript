class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
    let currentAddVal = (l1 ? l1.val : 0) + (l2 ? l2.val : 0),
        res = new ListNode(currentAddVal % 10),
        increment = currentAddVal > 9 ? 1 : 0;

    if (l1?.next !== null || l2?.next !== null) {
        let nextl1 = l1?.next ? new ListNode(l1.next.val + increment) : new ListNode(increment);
        let nextl2 = l2?.next ? l2.next : new ListNode(0);

        if (l1?.next) nextl1.next = l1.next.next;

        res.next = addTwoNumbers(nextl1, nextl2);
    } else if (increment) {
        res.next = new ListNode(increment);
    }

    return res;
}

function convertToArray(LN: ListNode): number[] {
    let res: number[] = [];
    while (LN !== null) {
        res.push(LN.val);
        LN = LN.next;
    }
    return res;
}
