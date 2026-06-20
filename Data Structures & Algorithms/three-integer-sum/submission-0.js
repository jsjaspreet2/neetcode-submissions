class Solution {
    /**
     * @param {number[]}
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a-b)
        const res = []
        for(let i = 0; i < nums.length; i++) {
            let num = nums[i]
            if(num > 0) break
            if(i > 0 && nums[i] === nums[i-1]) continue
            let j = i+1
            let k = nums.length-1
            while(j < k) {
                let target = -num
                let left = nums[j]
                let right = nums[k]
                let currSum = left + right
                if(currSum === target) {
                    res.push([nums[i], nums[j], nums[k]])
                    // skip duplicates
                    while(nums[j] === left) {
                        j++
                    }
                    while(nums[k] === right) {
                        k--
                    }
                } else if (currSum > target) {
                    k--
                } else {
                    j++
                }
            }
        }
        return res
    }
}