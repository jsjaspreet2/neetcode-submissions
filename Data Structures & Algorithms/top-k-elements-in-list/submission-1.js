class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map()
        for(const num of nums) {
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1)
        }
        let freqArray = new Array(nums.length+1).fill(null).map(() => [])
        for(const [num, freq] of freqMap.entries()) {
            freqArray[freq].push(num)
        }
        let res = []
        for(let i = freqArray.length-1; i >= 0; i--) {
            res.push(...freqArray[i])
            if(res.length >= k) {
                return res
            }
        }

    }


        //     const freqMap = new Map()
        // for(const num of nums) {
        //     freqMap.set(num, (freqMap.get(num) ?? 0) +1)
        // }
        // const freqArray = new Array(nums.length+1).fill(null).map(() => [])
        // for(const [num, freq] of freqMap.entries()) freqArray[freq].push(num)
        // let res = []
        // for(let i = freqArray.length-1; i >= 0; i--) {
        //     let entries = freqArray[i]
        //     res.push(...entries)
        //     if(res.length === k) {
        //         return res
        //     }
        // }
}