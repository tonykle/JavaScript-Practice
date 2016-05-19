'use strict';

/**
* Iterates pre-order through a given input tree, and returns the result
* Treats array as a stack
*
* @param {TreeNode} root
* @return {Array}
*/
function preorderTraversal(root) {
    let answ = [];
    let stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let curr = stack.pop();
        if (curr !== null) {
            answ.push(curr.val);
            if (curr.right !== null) {
                stack.push(curr.right);
            }
            if (curr.left !== null) {
                stack.push(curr.left);
            }
        }
    }
    return answ;
};
