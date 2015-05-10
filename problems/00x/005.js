/**
 * problems/00x/005.js
 * Smallest multiple
 */

module.exports = function (limit) {
	var isMultiple = false,
		i = limit;

	do {
		i += limit;

		for (var j = 2; j < limit; j++) {
			isMultiple = i % j === 0;

			if (!isMultiple) {
				break;
			}
		}
	}

	while (!isMultiple);

	return i;
};
