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
  
    // Delete the last occurrence of a key in the linked list
    deleteLastOccurrence(key) {
      if (this.head === null) {
        return; // Empty list
      }
  
      let lastOccurrence = null;
      let prevLastOccurrence = null;
      let current = this.head;
      let prev = null;
  
      while (current !== null) {
        if (current.data === key) {
          lastOccurrence = current;
          prevLastOccurrence = prev;
        }
        prev = current;
        current = current.next;
      }
  
      if (lastOccurrence === null) {
        return; // Key not found
      }
  
      if (prevLastOccurrence === null) {
        this.head = lastOccurrence.next; // Deleting the head node
      } else {
        prevLastOccurrence.next = lastOccurrence.next; // Deleting the last occurrence
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
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(2);
  linkedList.insert(4);
  linkedList.insert(2);
  linkedList.insert(5);
  
  console.log('Original List:');
  linkedList.printList();
  
  const key = 2;
  linkedList.deleteLastOccurrence(key);
  
  console.log(`List after deleting the last occurrence of ${key}:`);
  linkedList.printList();
  