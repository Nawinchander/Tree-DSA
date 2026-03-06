//// tree - DSA

function Node(value) {
  return {
    value: value,
    left: null,
    right: null
  };
}

// Create nodes
let root = Node(1);
root.left = Node(2);
root.right = Node(3);
root.left.left = Node(4);
root.left.right = Node(5);

console.log(root);


//        1
//      /   \
//     2     3
//    / \
//   4   5


/// inorder Traversal (left - root - right )

function inorder(root) {
  if (root === null) return;

  inorder(root.left);
  console.log(root.value);
  inorder(root.right);
}

inorder(root);


// 4
// 2
// 5
// 1
// 3


///// Preorder Traversal (Root → Left → Right)

function preorder(root) {
  if (root === null) return;

  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
}

preorder(root);

// op
// 1
// 2
// 4
// 5
// 3






