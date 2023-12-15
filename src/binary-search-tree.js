const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
      this.roots = null;
  }
 
  
  root() {
    return this.roots;
  }

  add(data) {
    
    this.roots = addNode(this.roots, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return search(this.roots, data);

      function search(node, data) {
        if (!node) {
          return false;
        }

        if (node.data === data) {
          return true;
        }

        return data < node.data ? 
          search(node.left, data) : 
          search(node.right, data);
      }
  }

  find(data) {
    return findNode(this.roots, data);

    function findNode(node, data) {
      if (node === null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? 
        findNode(node.left, data) : 
        findNode(node.right, data);
    }
  }

  remove(data) {
    this.root = removeNode(this.roots, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};