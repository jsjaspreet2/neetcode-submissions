class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqMap = new Map()
        let l = 0, maxF = 0, res = 0
        for(let r = 0; r < s.length; r++) {
            let c = s[r]
            let freq = (freqMap.get(c) ?? 0) +1
            freqMap.set(c, freq)
            if(freq > maxF) {
                maxF = freq
            }
            while(r-l+1 - maxF > k) {
                freqMap.set(s[l], freqMap.get(s[l])-1)
                l++
            }
            res = Math.max(res, r-l+1)
        }
        return res
    }
}
