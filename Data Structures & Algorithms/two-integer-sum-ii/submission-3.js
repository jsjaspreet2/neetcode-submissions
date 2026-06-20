class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0, j = nums.length-1
        let sum = nums[i] + nums[j]
        while(sum !== target) {
            if(sum > target) {
                j--
            } else {
                i++
            }
            sum = nums[i]+nums[j]
        }
        return [i+1, j+1]
    }
}
