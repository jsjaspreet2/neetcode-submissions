class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0]
        let currSum = 0
        for(const num of nums) {
            currSum = Math.max(currSum,  0)
            currSum += num
            maxSum = Math.max(maxSum, currSum)
        }
        return maxSum
    }
}
