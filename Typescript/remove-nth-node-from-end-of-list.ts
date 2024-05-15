class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    
    for (let i = 0; i < n; i++) {
        if (fast === null) return head;
        fast = fast.next;
    }
    
    if (!fast) return head?.next;
    
    while (fast?.next !== null) {
        fast = fast.next;
        slow = slow?.next;
    }
    
    if (slow && slow.next) {
        slow.next = slow.next.next;
    }
    
    return head;
};
