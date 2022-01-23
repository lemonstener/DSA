class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enque(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    return node;
  }
  deque() {
    if (!this.head && !this.tail) return "Nothing to remove";
    const node = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    return node;
  }
  peek() {
    return this.head;
  }
  isEmpty() {
    return !this.head && !this.tail;
  }
}

const line = new Queue();
line.enque("Mark");
line.enque("Lisa");
line.enque("Bobby");

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enque(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const node = new Node(val);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
      }

      return node;
    }
  }
  deque() {
    if (!this.head && !this.tail) return "Nothing to remove";
    const node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    return node;
  }
  peek() {
    return this.tail;
  }
  isEmpty() {
    return !this.head && !this.tail;
  }
}

const instructions = new Stack();
instructions.enque("Open oven");
instructions.enque("Put pizza inside");
instructions.enque("Close Oven");
