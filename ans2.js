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
  
    // Remove duplicate nodes from the sorted linked list
    removeDuplicates() {
      if (this.head === null || this.head.next === null) {
        return; // Empty list or only one node
      }
  
      let current = this.head;
      while (current.next !== null) {
        if (current.data === current.next.data) {
          current.next = current.next.next; // Remove the duplicate node
        } else {
          current = current.next; // Move to the next distinct node
        }
      }
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
  linkedList.insert(11);
  linkedList.insert(11);
  linkedList.insert(11);
  linkedList.insert(21);
  linkedList.insert(43);
  linkedList.insert(43);
  linkedList.insert(60);
  
  console.log('Original List:');
  linkedList.printList();
  
  linkedList.removeDuplicates();
  
  console.log('List after removing duplicates:');
  linkedList.printList();
  