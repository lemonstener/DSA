class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  findDFS(val) {
    const stack = [this];
    while (stack.length) {
      const current = stack.pop();
      console.log(current);
      if (current.val === val) return current;
      for (let child of current.children) {
        stack.push(child);
      }
    }
  }
  findBFS(val) {
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      console.log(current);
      if (current.val === val) return current;
      for (let child of current.children) {
        queue.push(child);
      }
    }
  }
}

const amy = new Node("Amy", [
  new Node("Bob", [new Node("Adam"), new Node("Chuck"), new Node("Sarah")]),
  new Node("Phil", [new Node("Spencer")]),
  new Node("Ava", [new Node("Mark")]),
]);
