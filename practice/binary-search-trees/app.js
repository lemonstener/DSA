class Node {
  constructor(val, left = null, right = null) {
    (this.val = val), (this.left = left), (this.right = right);
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  find(val) {
    let current = this.root;
    while (current) {
      console.log(current);
      if (current.val === val) return current;
      if (current.val > val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
  traverse(node = this.root) {
    console.log(node.val);
    if (node.left) this.traverse(node.left);
    if (node.right) this.traverse(node.right);
  }
}

const e = new Node("E");

e.left = new Node("B", new Node("A"), new Node("D"));
e.right = new Node("F", null, new Node("G"));

const tree = new BinarySearchTree(e);
