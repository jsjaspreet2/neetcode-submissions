class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Map()
        let res = 0
        let l = 0
        for(let r = 0; r < s.length; r++) {
            // if seen, must update l
            if(seen.has(s[r])) {
                l = Math.max(l, seen.get(s[r])+1)
            }
            seen.set(s[r], r)
            res = Math.max(res, r-l+1)
        }
        return res
    }
}
