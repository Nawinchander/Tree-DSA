///Find Maximum Value in Tree

function findMax(root) {
  if (root === null) return -Infinity;

  let leftMax = findMax(root.left);
  let rightMax = findMax(root.right);

  return Math.max(root.value, leftMax, rightMax);
}

console.log(findMax(root));

/// op

// 5


////Count Number of Nodes

function countNodes(root) {
  if (root === null) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
}

console.log(countNodes(root));


/// op

// 5


/// Find Height of Tree

function height(root) {
  if (root === null) return -1;

  let left = height(root.left);
  let right = height(root.right);

  return Math.max(left, right) + 1;
}

console.log(height(root));

/// op 

/// 2





