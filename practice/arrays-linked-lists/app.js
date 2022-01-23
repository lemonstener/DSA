// NODE CLASS

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// LINKED LIST CLASS

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  traverse() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
  find(val) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      currentNode = currentNode.next;
    }

    return -1;
  }
  append(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
  }
  remove(val) {
    if (this.head.val === val && this.tail.val === val) {
      this.head = null;
      this.tail = null;
      return `Removed ${val}`;
    } else if (this.head.val === val) {
      this.head = this.head.next;
      return `Removed ${val}`;
    } else {
      let currentNode = this.head;
      let prevNode = null;

      while (currentNode) {
        if (currentNode.val === val) {
          if (!currentNode.next) {
            prevNode.next = null;
            this.tail = prevNode;
            return `Removed ${val}`;
          } else {
            prevNode.next = currentNode.next;
            return `Removed ${val}`;
          }
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      return -1;
    }
  }
}

// BASIC MANUAL

const hello = new Node("hello");
const world = new Node("World");
hello.next = world;

const one = new Node("Google", new Node("Facebook", new Node("Reddit")));
one.next.next.next = new Node("Twitter");

// USING LINKED LIST CLASS

const history = new LinkedList();
history.append("Google");
history.append("Facebook");
history.append("Reddit");
