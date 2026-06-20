class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        let i =0, j = heights.length-1
        while(i < j) {
            let wall = Math.min(heights[i], heights[j])
            let length = j-i
            res = Math.max(wall*length, res)
            if(heights[i] > heights[j]) {
                j--
            } else {
                i++
            }
        }
        return res
    }
}
