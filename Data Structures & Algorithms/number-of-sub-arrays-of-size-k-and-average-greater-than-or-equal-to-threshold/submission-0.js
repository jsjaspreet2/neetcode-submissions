class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let res = 0
        let currSum = 0
        let l = 0
        for(let r = 0; r < arr.length; r++) {
            // calculate sum along the way
            currSum += arr[r]
            
            // wait until window reaches size k
            if (r - l + 1 === k) {
                // if we've found a valid subarray, increment res
                if((currSum/k) >= threshold) {
                    res++
                }
                // as we increment r, slide the l one spot, adjusting currSum as needed
                currSum -= arr[l++]
            }
        }
        return res
    }
}