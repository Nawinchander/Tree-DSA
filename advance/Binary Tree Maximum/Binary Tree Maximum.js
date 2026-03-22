/// Binary Tree Maximum Path Sum


function maxPathSum(root) {
    let maxSum = -Infinity;

    function dfs(node) {
        if (!node) return 0;

        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));

        // Path passing through current node
        let currentMax = left + right + node.val;

        maxSum = Math.max(maxSum, currentMax);

        // Return max path going up
        return node.val + Math.max(left, right);
    }

    dfs(root);
    return maxSum;
}



// Complexity:
// Time: O(n)
// Space: O(h)




