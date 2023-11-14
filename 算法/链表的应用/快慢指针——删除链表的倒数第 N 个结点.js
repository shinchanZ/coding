// > 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// > 示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
// > 当删除了倒数第二个结点后，链表变为 1->2->3->5.
// > 说明： 给定的 n 保证是有效的。

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
