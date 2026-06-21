class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // keep track of a window and left pointer
        const window = new Set()
        let i = 0
        // expand the right edge linearly
        for(let j = 0; j < nums.length; j++) {
            if(j - i > k) {
                window.delete(nums[i])
                i++
            }
            if(window.has(nums[j])) {
                return true
            }
            window.add(nums[j])
        }
        return false
    }
}
