class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPriceSeen = Number.MAX_SAFE_INTEGER
        let maxProfit = 0
        for(const price of prices) {
            maxProfit = Math.max(price-minPriceSeen, maxProfit)
            minPriceSeen = Math.min(minPriceSeen, price)
        }
        return maxProfit
    }

}
