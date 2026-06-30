function checkMapEquality(s1, s2) {
    if(s1.size !== s2.size) {
        return false
    }
    const keys = s1.keys()
    for(const key of keys) {
        if(s2.get(key) !== s1.get(key)) {
            return false
        }
    }
    return true
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // s2 must be at least s1 length
        if(s2.length < s1.length) {
            return false
        }
        const s1FreqMap = new Map()
        for(const c of s1) {
            s1FreqMap.set(c, (s1FreqMap.get(c) ?? 0)+1)
        }
        let l = 0
        let s2FreqMap = new Map()
        for(let r = 0; r < s2.length; r++) {
            // if the current character is not in the s1 freq map, 
            // we can reset l and the map itself
            if(!s1FreqMap.has(s2[r])) {
                s2FreqMap.clear()
                l = r+1
                continue
            }
            // add the character to freq map
            s2FreqMap.set(s2[r], (s2FreqMap.get(s2[r]) ?? 0) +1)
            // if the window sizes match, check if a match is found
            if(r-l+1 === s1.length) {
                if(checkMapEquality(s1FreqMap, s2FreqMap)) {
                    return true
                }
                // if not, move l 
                s2FreqMap.set(s2[l], s2FreqMap.get(s2[l])-1)
                if(s2FreqMap.get(s2[l]) === 0) s2FreqMap.delete(s2[l])
                l++
            }

        }
        // if a match wasn't found in the sliding window above, return false
        return false;
    }
}