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
  
    // Reverse the doubly linked list
    reverse() {
      let current = this.head;
      let temp = null;
  
      // Swap prev and next pointers of each node
      while (current !== null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev; // Move to the next node
      }
  
      // Update the head of the reversed list
      if (temp !== null) {
        this.head = temp.prev;
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
  
  doublyLinkedList.reverse();
  
  console.log('Reversed List:');
  doublyLinkedList.printList();
  