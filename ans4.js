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
  
    // Reverse every alternate k nodes in the linked list
    reverseAlternateKNodes(k) {
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
        this.head.next = next;
      }
  
      // Skip the next k nodes
      count = 0;
      while (current !== null && count < k - 1) {
        current = current.next;
        count++;
      }
  
      // Recursively reverse the alternate groups of k nodes
      if (current !== null) {
        current.next = this.reverseAlternateKNodes(current.next, k);
      }
  
      this.head = prev;
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
  linkedList.reverseAlternateKNodes(k);
  
  console.log(`List after reversing every alternate ${k} nodes:`);
  linkedList.printList();
  