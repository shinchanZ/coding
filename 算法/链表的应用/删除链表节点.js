// > 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// > 示例 1:
// > 输入: 1->1->2
// > 输出: 1->2
// > 示例 2:
// > 输入: 1->1->2->3->3
// > 输出: 1->2->3

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
  let current = head;
  while (current.next && current) {
    if (current.next.val === current.val) {
      current.next === current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
