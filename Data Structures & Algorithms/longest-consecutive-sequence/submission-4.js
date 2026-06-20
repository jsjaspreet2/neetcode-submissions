class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSeqSize = 0
        const visitedMap = new Map()
        for(const num of nums) {
            visitedMap.set(num, false)
        }

        function visit(num) {
            if(visitedMap.has(num-1) && !visitedMap.get(num-1)) {
                return visit(num - 1)
            }
            let max = 0
            let curr = num
            while(visitedMap.has(curr)) {
                max++
                visitedMap.set(curr, true)
                curr++
            }
            return max
        }

        // walk through each num, go back as much as you can, then keep track of
        // how much you can go forward, setting longest seq size as needed
        for(const num of nums) {
            // already visited
            if(visitedMap.get(num)) {
                continue
            } else {
                longestSeqSize = Math.max(longestSeqSize, visit(num))
            }
        }

        return longestSeqSize
    }
}
