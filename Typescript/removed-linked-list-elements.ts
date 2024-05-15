function removeElements(head: ListNode | null, val: number): ListNode | null {
    let result = head;
    let prevPointer = null;
    let currentPointer = head;

    if (!currentPointer) {
        return result?.val === val ? null : head;
    }

    while (currentPointer) {
        if (currentPointer.val === val) {
            if (prevPointer) {
                prevPointer.next = currentPointer.next;
            }  else {
                result = currentPointer.next;
            }
        } else {
            prevPointer = currentPointer;
        }

        currentPointer = currentPointer.next;
    }

    return result;
};