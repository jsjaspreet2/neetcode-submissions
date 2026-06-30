class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = Number.MAX_SAFE_INTEGER
        let l = 0
        let sum = 0
        // iterate over all numbers, 
        // expanding a window until it is greater than or equal to the array
        // when the condition is met, reset res appropriately and 
        // shrink the array until condition is no longer met
        for(let r = 0; r < nums.length; r++) {
            sum += nums[r]
            while(sum >= target) {
                res = Math.min(r-l+1, res)
                sum -= nums[l]
                l++
            }
        }
        return res === Number.MAX_SAFE_INTEGER ? 0 : res
    }
}