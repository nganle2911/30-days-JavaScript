// https://leetcode.com/problems/buy-two-chocolates/description/?envType=daily-question&envId=2023-12-20

let buyChoco = (prices, money) => {
    let sum; 
    let minSum = Infinity; 
    let leftover;
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            sum = prices[i] + prices[j]; 

            if (sum < minSum) {
                minSum = sum;
            }
        }
    }

    leftover = money - minSum; 

    if (leftover < 0) {
        leftover = money;
        return leftover; 
    } else {
        return leftover;
    }
}

console.log(buyChoco([1,2,2], 3));