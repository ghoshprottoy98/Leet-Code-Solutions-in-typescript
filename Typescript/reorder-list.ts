function reorderList(head: ListNode | null): void {
    if (!head?.next?.next) {
        return ;
    }

    let prevTailNode = head;
    let tailNode = head;
    while (tailNode.next) {
        prevTailNode = tailNode;
        tailNode = tailNode.next;
    }

    const restNodes = head.next;
    prevTailNode.next = null;
    head.next = tailNode;
    tailNode.next = restNodes;
    reorderList(restNodes);

    return ;
};