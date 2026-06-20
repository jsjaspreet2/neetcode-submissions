class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        const leftHeights = []
        const rightHeights = []
        let leftMax = 0, rightMax =0
        for(let i = 0; i < heights.length; i++) {
            leftHeights.push(leftMax)
            leftMax = Math.max(leftMax, heights[i])
        }
        for(let j = heights.length-1; j >= 0; j--) {
            rightHeights.unshift(rightMax)
            rightMax = Math.max(rightMax, heights[j])
        }
        let res = 0
        for(let i = 0; i < heights.length; i++) {
            let waterInPosition = Math.min(leftHeights[i], rightHeights[i]) - heights[i]
            res += Math.max(0, waterInPosition)
        }
        return res
    }
}
