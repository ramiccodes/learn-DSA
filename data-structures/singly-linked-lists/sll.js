// Objectives
// - Define what a Singly Linked List is
// - Compare and contrast Linked List with Arrays
// - Implement Insertion, removal, and traversal methods on Singly Linked Lists

// What is a linked list?
// - A data structure that contains a head, tail, and length property
// - Linked Lists consists of nodes, and each node has a value and a pointer to another node or null

// Each element is a node
// So a linked list consists of a bunch of nodes, a node stores a piece of data
// but it also references the next node or if there is no next node, it references null

// Singly Linked Lists diagram
// HEAD  LENGTH = 4  TAIL
//  4 --> 6 --> 8 --> 2 -->
//    next  next  next  null

// A linked list is just a bunch of nodes pointing to other nodes
// It is called a singly linked list from the fact that each node is only
// connected one directionally to the next node

// Comparison with Arrays
// Lists:
// - Do not have indexes!
// - Connected via nodes with a next pointer
// - Random access is not allowed (Can't just ask for the 10th element, need to check each one)

// Arrays:
// - Indexed in order!
// - Insertion and deletion can be expensive (Adding or deleting elements means that all the other elements get reindexed)
// - Can quickly be accessed at a specific index


// Starter Code and Push Intro
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
// This is a very bad way of representing a linked list because you have to keep writing .next when adding a new node


// Remember that a linked list has a pointer to the head of the list and a pointer to the tail of the list and a length
class SinglyLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // This push method should assign a new node and assign the value passed to head and tail if
  // it is only the node that exists, otherwise, the previous node will be set as the head and the tail becomes the new node created
  push(val) {

  }
}

// Pushing Pseudocode
// - This function should accept a value
// - Create a new node using the value passed to the function
// - If there is no head property on the list, set the head and tail to be the newly created node
// - Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be
// the newly created node
// - Increment the length by one
let list = new SinglyLinkedList();
