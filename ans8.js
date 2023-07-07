class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert a node at the end of the doubly linked list
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
        newNode.prev = current;
      }
    }
  
    // Delete a node from the given position in the doubly linked list
    deleteNode(position) {
      if (this.head === null) {
        return; // Empty list
      }
  
      let current = this.head;
      let count = 1;
  
      // Find the node to be deleted
      while (current !== null && count < position) {
        current = current.next;
        count++;
      }
  
      if (current === null) {
        return; // Invalid position
      }
  
      // Update the previous and next pointers of the surrounding nodes
      if (current.prev !== null) {
        current.prev.next = current.next;
      } else {
        this.head = current.next; // Deleting the head node
      }
  
      if (current.next !== null) {
        current.next.prev = current.prev;
      }
    }
  
    // Print the doubly linked list
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
  const doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.insert(1);
  doublyLinkedList.insert(2);
  doublyLinkedList.insert(3);
  doublyLinkedList.insert(4);
  doublyLinkedList.insert(5);
  
  console.log('Original List:');
  doublyLinkedList.printList();
  
  const position = 3;
  doublyLinkedList.deleteNode(position);
  
  console.log(`List after deleting the node at position ${position}:`);
  doublyLinkedList.printList();
  