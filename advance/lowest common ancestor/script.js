function Node(val){
    return {
        val: val,
        left: null,
        right: null
    }
}

let root = Node(3)
root.left = Node(5)
root.right = Node(1)
root.left.left = Node(6)
root.left.right = Node(2)
root.right.left = Node(0)
root.right.right = Node(8)

function LCA(root, p, q){
    if(root === null) return null

    if(root.val === p || root.val === q) return root

    let left = LCA(root.left, p, q)
    let right = LCA(root.right, p, q)

    if(left && right) return root

    return left ? left : right
}

console.log(LCA(root,5,1).val)


//// op

/// 3


/// Time Complexity

///// 0(n)

