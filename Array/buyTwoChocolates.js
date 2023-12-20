// https://leetcode.com/problems/buy-two-chocolates/description/?envType=daily-question&envId=2023-12-20

let buyChoco = (prices, money) => {
    let sum = 0; 
    let leftover = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        sum = prices[i] + prices[i+1];

        if (sum <= money) {
            leftover = money - sum; 
            break;
        } else {
            leftover = money;
        }
    }

    return leftover; 
}

console.log(buyChoco([98,54,6,34,66,63,52,39], 62));