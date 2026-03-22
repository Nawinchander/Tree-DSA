// Binary Tree Maximum Path Sum
// Problem: Find the maximum path sum in a binary tree.

// path:
// Can start and end at ANY node
// Must be continuous (parent-child connections)
// Can go left → root → right

// At each node, you have 2 choices:

// Use it as a path endpoint (return to parent)
// Use it as a split point (left + root + right)

// 👉 So we track:

// Global max → best path anywhere
// Return value → max path going upward






