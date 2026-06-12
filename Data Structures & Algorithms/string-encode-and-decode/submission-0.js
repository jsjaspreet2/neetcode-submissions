class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(const str of strs) {
            res += `${str.length}#${str}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        let res = []
        while(i < str.length) {
            let j = i
            while(str[i] !== '#') {
                i++
            }
            const num = parseInt(str.substring(j, i))
            // jump over #
            i++
            const word = str.substring(i, i+num)
            res.push(word)
            i+=num
        }
        return res
    }
}
