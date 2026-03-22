// Serialize & Deserialize Binary Tree

// Problem: Convert a binary tree into a string and back.


// Use Preorder traversal
// Represent null nodes as "null"
// Use a queue to rebuild tree


function serialize(root) {
    let result = [];

    function dfs(node) {
        if (!node) {
            result.push("null");
            return;
        }
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result.join(",");
}

function deserialize(data) {
    let list = data.split(",");

    function buildTree() {
        if (list[0] === "null") {
            list.shift();
            return null;
        }

        let node = new TreeNode(parseInt(list[0]));
        list.shift();

        node.left = buildTree();
        node.right = buildTree();

        return node;
    }

    return buildTree();
}


// Complexity:
// Time: O(n)
// Space: O(n)



