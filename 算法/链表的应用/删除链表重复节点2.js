// > 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

// > 示例 1:
// > 输入: 1->2->3->3->4->4->5
// > 输出: 1->2->5
// > 示例 2:
// > 输入: 1->1->1->2->3
// > 输出: 2->3
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let current = dummy;
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      let val = current.next.val;
      current.next = current.next.next;
      while (current.next && current.next.val === val) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};
