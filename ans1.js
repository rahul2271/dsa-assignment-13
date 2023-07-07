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
  
    // Create a new linked list by choosing the greater nodes from two lists
    createNewList(list1, list2) {
      if (list1.head === null || list2.head === null) {
        return null; // Empty lists
      }
  
      const newList = new LinkedList();
      let current1 = list1.head;
      let current2 = list2.head;
  
      while (current1 !== null && current2 !== null) {
        if (current1.data >= current2.data) {
          newList.insert(current1.data);
          current1 = current1.next;
        } else {
          newList.insert(current2.data);
          current2 = current2.next;
        }
      }
  
      // If either list still has remaining nodes, append them to the new list
      while (current1 !== null) {
        newList.insert(current1.data);
        current1 = current1.next;
      }
  
      while (current2 !== null) {
        newList.insert(current2.data);
        current2 = current2.next;
      }
  
      return newList;
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
  const list1 = new LinkedList();
  list1.insert(1);
  list1.insert(3);
  list1.insert(5);
  list1.insert(7);
  
  const list2 = new LinkedList();
  list2.insert(2);
  list2.insert(4);
  list2.insert(6);
  list2.insert(8);
  
  console.log('List 1:');
  list1.printList();
  console.log('List 2:');
  list2.printList();
  
  const newList = new LinkedList();
  newList.createNewList(list1, list2);
  
  console.log('New List:');
  newList.printList();
  