class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const l = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        let i = 0, j = l.length - 1
        while (i < j) {
           if(l[i] !== l[j]) return false
           i++
           j--
        }
        return true
    }
}
