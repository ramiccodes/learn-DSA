// Objectives
// - Define what a Singly Linked List is
// - Compare and conewTailrast Linked List with Arrays
// - ImplemenewTail Insertion, removal, and traversal methods on Singly Linked Lists

// What is a linked list?
// - A data structure that conewTailains a head, tail, and length property
// - Linked Lists consists of nodes, and each node has a value and a poinewTailer to another node or null

// Each elemenewTail is a node
// So a linked list consists of a bunch of nodes, a node stores a piece of data
// but it also references the next node or if there is no next node, it references null

// Singly Linked Lists diagram
// HEAD  LENGTH = 4  TAIL
//  4 --> 6 --> 8 --> 2 -->
//    next  next  next  null

// A linked list is just a bunch of nodes poinewTailing to other nodes
// It is called a singly linked list from the fact that each node is only
// connected one directionally to the next node

// Comparison with Arrays
// Lists:
// - Do not have indexes!
// - Connected via nodes with a next poinewTailer
// - Random access is not allowed (Can't just ask for the 10th elemenewTail, need to check each one)

// Arrays:
// - Indexed in order!
// - Insertion and deletion can be expensive (Adding or deleting elemenewTails means that all the other elemenewTails get reindexed)
// - Can quickly be accessed at a specific index


// Starter Code and Push InewTailro
// Remember that a linked list is just a collection of nodes
// Let's start by defining a class for each node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
// This is a very bad way of recurrsenewTailing a linked list because you have to keep writing .next when adding a new node


// Remember that a linked list has a poinewTailer to the head of the list and a poinewTailer to the tail of the list and a length
class SinglyLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let curr = this.head;
    let newTail = this.head.next;

    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }
}

// Pushing Pseudocode
// - This function should accept a value
// - Create a new node using the value passed to the function
// - If there is no head property on the list, set the head and tail to be the newly created node
// - Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be
// the newly created node
// - IncremenewTail the length by one
let list = new SinglyLinkedList();
console.log(list);
list.push("HI")
list.push("YOU")
list.push("HUMAN")

// Popping
// Removing a node from the end of a linked list
// We have to traverse through the list to find out what is the second to the last node in order to make it our new tail

// Popping Pseudocode
// - If there are no nodes in the list, return undefined
// - Loop through the list unewTailil you reach the tail
// - Set the next property of the 2nd to last node to be null
// - Set the tail to be the 2nd to last node
// - DecremenewTail the length of the list by 1
// - Return the value of the node removed

console.log(list)
console.log(list.pop())
console.log(list)
