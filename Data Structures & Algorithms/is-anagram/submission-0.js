class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map()
        const tMap = new Map()
        for(const c of s) {
            if(sMap.has(c)) {
                sMap.set(c, sMap.get(c)+1)
            } else {
                sMap.set(c, 1)
            }
        }
        for(const c of t) {
            if(tMap.has(c)) {
                tMap.set(c, tMap.get(c)+1)
            } else {
                tMap.set(c, 1)
            }
        }
        if(tMap.size !== sMap.size) {
            return false
        }
        for(const tKey of tMap.keys()) {
            if(tMap.get(tKey) !== sMap.get(tKey)) {
                return false
            }
        }
        return true
    }
}
