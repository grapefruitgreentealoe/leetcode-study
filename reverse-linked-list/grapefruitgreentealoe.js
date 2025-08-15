/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let nextTemp = null;
    
    while (curr !== null) {
        nextTemp = curr.next; 
        curr.next = prev;     
        prev = curr;          
        curr = nextTemp;      
    }
    
    return prev;
};
