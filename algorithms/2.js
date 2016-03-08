/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  var result = new ListNode(0);
  var carry = 0;
  var p = result;
  while (l1 !== null && l2 !== null) {
    p.next = new ListNode(l1.val + l2.val + carry);
    carry = Math.floor(p.next.val / 10);
    p.next.val = p.next.val % 10;
    l1 = l1.next;
    l2 = l2.next;
    p = p.next;
  }
  var l = l1 || l2;
  while (l !== null) {
    p.next = new ListNode(l.val + carry);
    carry = Math.floor(p.next.val / 10);
    p.next.val = p.next.val % 10;
    l = l.next;
    p = p.next;
  }
  if (carry > 0) {
    p.next = new ListNode(carry);
  }
  return result.next;
};

var a = new ListNode(1);
// a.next = new ListNode(4);
// a.next.next = new ListNode(3);

var b = new ListNode(9);
b.next = new ListNode(9);
// b.next.next = new ListNode(4);

console.log(addTwoNumbers(a, b));

