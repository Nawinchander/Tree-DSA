let diameter = 0

function height(root){

    if(root === null) return 0

    let left = height(root.left)
    let right = height(root.right)

    diameter = Math.max(diameter, left + right)

    return Math.max(left, right) + 1
}

height(root)

console.log(diameter)


/// Time Complexity

/// 0(n)

