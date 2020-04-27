class Tree {
  constructor() {
    this.root = null;
  }
  toObject() {
    return this.root;
  }
  add(value) {
    if (this.root === null) {
      // if no root, create root
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      }
      if (current.right) {
        current = current.right;
      } else {
        current.right = new Node(value);
        return;
      }
    }
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// test 
const treeTest = new Tree
treeTest.add(3)
treeTest.add(5)
treeTest.add(4)
treeTest.add(9)
treeTest.add(2)
treeTest.add(1)

console.log(treeTest)