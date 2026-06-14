class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length-1
        while(left <= right) {
            let middle = left + Math.floor((right-left) /2)
            let middleNum = nums[middle]
            if(middleNum === target) return middle
            else if (middleNum > target) {
                right=middle-1
            } else {
                left=middle+1
            }
        }
        return -1
    }
}
