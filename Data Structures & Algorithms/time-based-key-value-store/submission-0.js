class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)) {
            this.keyStore.get(key).push([timestamp, value])
        } else {
            this.keyStore.set(key, [[timestamp, value]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key)
        if(values == null || values[0] > timestamp) return ''
        let left = 0, right = values.length-1, val = ''
        while(left <= right) {
            let pivot = left + Math.floor((right-left)/2)
            let middle = values[pivot]
            if(middle[0] <= timestamp) {
                val = middle[1]
                left=pivot+1
            } else {
                right=pivot-1
            }
        }
        return val 
    }
}
