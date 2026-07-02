class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // algorithm
        // push numbers
        // pop when operator is seen
        // push operation result
        // at the end, pop final result
        const stack = []
        const isOperator = c => ['/', '+', '-', '*'].includes(c)
        for(const token of tokens) {
            if(isOperator(token)) {
                const rightNum = Number(stack.pop())
                const leftNum = Number(stack.pop())
                if(token === '/') {
                    stack.push(Math.trunc(leftNum/rightNum))
                } else if (token === '*') {
                    stack.push(leftNum * rightNum)
                } else if (token === '+') {
                    stack.push(leftNum + rightNum)
                } else {
                    stack.push(leftNum - rightNum)
                }
            } else {
                stack.push(token)
            }
        }
        return Number(stack.pop())
    }
}
