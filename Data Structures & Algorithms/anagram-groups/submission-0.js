class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedStrs = strs.map(str => [str, str.split('').sort().join('')])
        const anagramMap = new Map()
        for(const [str, sortStr] of sortedStrs) {
            if(anagramMap.has(sortStr)) {
                const arr = anagramMap.get(sortStr)
                arr.push(str)
            } else {
                anagramMap.set(sortStr, [str])
            }
        }
        return Array.from(anagramMap.values())
    }
}