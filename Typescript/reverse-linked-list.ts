class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

const reverseList = (head: ListNode | null): ListNode | null => {
    if (!head) {
        return head;
    }
    
    let res: ListNode | null = new ListNode(head.val);
    
    while (head.next) {
        let temp: ListNode | null = res;
        res = new ListNode(head.next.val);
        if (temp) {
            res.next = temp;
        }
        head = head.next;
    }
    
    return res;
};
