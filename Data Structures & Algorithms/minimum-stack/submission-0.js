class MinStack {
    constructor() {
        this.stack = [];
        this.currMinDefault = 99999999999999;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let s = this.stack;
        let currMin = s.length > 0 ? s[s.length - 1][1] : this.currMinDefault;
        if (val < currMin) {
            currMin = val;
        }
        this.stack.push([val, currMin]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        let s = this.stack;
        return s[s.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        let s = this.stack;
        return s[s.length - 1][1];
    }
}
