class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert a node at the end of the linked list
    insert(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Reverse every k nodes in the linked list
    reverseKNodes(k) {
      if (this.head === null || k <= 1) {
        return; // Empty list or invalid k value
      }
  
      let current = this.head;
      let prev = null;
      let next = null;
      let count = 0;
  
      // Reverse the first k nodes
      while (current !== null && count < k) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
      }
  
      // Connect the reversed part to the remaining list
      if (next !== null) {
        this.head.next = this.reverseKNodesUtil(next, k);
      }
  
      this.head = prev;
    }
  
    // Utility function to reverse the remaining nodes recursively
    reverseKNodesUtil(current, k) {
      let prev = null;
      let next = null;
      let count = 0;
  
      // Reverse the next k nodes
      while (current !== null && count < k) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
      }
  
      // Connect the reversed part to the remaining list
      if (next !== null) {
        this.head.next = this.reverseKNodesUtil(next, k);
      }
  
      return prev;
    }
  
    // Print the linked list
    printList() {
      let current = this.head;
      let result = '';
      while (current !== null) {
        result += current.data + ' ';
        current = current.next;
      }
      console.log(result);
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  linkedList.insert(5);
  linkedList.insert(6);
  linkedList.insert(7);
  linkedList.insert(8);
  
  console.log('Original List:');
  linkedList.printList();
  
  const k = 3;
  linkedList.reverseKNodes(k);
  
  console.log(`List after reversing every ${k} nodes:`);
  linkedList.printList();
  