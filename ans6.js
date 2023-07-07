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
  
    // Merge two sorted linked lists
    mergeSortedLists(list1, list2) {
      if (list1 === null) {
        return list2; // If list1 is empty, return list2
      }
      if (list2 === null) {
        return list1; // If list2 is empty, return list1
      }
  
      // Set the head of the merged list
      let mergedHead;
      if (list1.data <= list2.data) {
        mergedHead = list1;
        list1 = list1.next;
      } else {
        mergedHead = list2;
        list2 = list2.next;
      }
  
      let current = mergedHead;
  
      // Merge the remaining nodes
      while (list1 !== null && list2 !== null) {
        if (list1.data <= list2.data) {
          current.next = list1;
          list1 = list1.next;
        } else {
          current.next = list2;
          list2 = list2.next;
        }
        current = current.next;
      }
  
      // Connect the remaining nodes, if any
      if (list1 !== null) {
        current.next = list1;
      }
      if (list2 !== null) {
        current.next = list2;
      }
  
      return mergedHead;
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
  const linkedList1 = new LinkedList();
  linkedList1.insert(1);
  linkedList1.insert(4);
  linkedList1.insert(7);
  
  const linkedList2 = new LinkedList();
  linkedList2.insert(2);
  linkedList2.insert(3);
  linkedList2.insert(6);
  
  console.log('List 1:');
  linkedList1.printList();
  
  console.log('List 2:');
  linkedList2.printList();
  
  const mergedList = new LinkedList();
  mergedList.head = mergedList.mergeSortedLists(linkedList1.head, linkedList2.head);
  
  console.log('Merged List:');
  mergedList.printList();
  