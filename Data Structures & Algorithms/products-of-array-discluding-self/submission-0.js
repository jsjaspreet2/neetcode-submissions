class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let numZeroes = 0
        let productOfAll = 1
        for(const num of nums) {
            if(num === 0) {
                numZeroes++
            }
            productOfAll *= num
        }
        if(numZeroes > 1) {
            return nums.fill(0)
        } else if (numZeroes === 0) {
            return nums.map(num => productOfAll/num)
        } else {
            let productOfAllExceptZero = 1
            for(const num of nums) {
                if(num === 0) continue
                productOfAllExceptZero *= num
            }
            return nums.map(num => num === 0 ? productOfAllExceptZero : 0)
        }
    }
}
