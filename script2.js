///Find Maximum Value in Tree

function findMax(root) {
  if (root === null) return -Infinity;

  let leftMax = findMax(root.left);
  let rightMax = findMax(root.right);

  return Math.max(root.value, leftMax, rightMax);
}

console.log(findMax(root));

