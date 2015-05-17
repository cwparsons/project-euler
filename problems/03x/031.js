/**
 * problems/03x/031.js
 * Coin sums
 */

function nextCoin (coins, sum, index) {
	var n = 0;

	if (index === -1) {
		return 0;
	}

	for (var i = 0; i * coins[index] <= sum; i++) {
		if (i * coins[index] === sum) {
			n++;
		} else {
			n += nextCoin(coins, sum - i * coins[index], index - 1);
		}
	}

	return n;
}

module.exports = function (amount) {
	amount = parseInt(amount, 10);

	var coins = [1, 2, 5, 10, 20, 50, 100, 200];

	return nextCoin(coins, amount, coins.length - 1);
};
