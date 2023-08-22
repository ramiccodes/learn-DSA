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