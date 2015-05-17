/**
 * problems/01x/019.js
 * Counting Sundays
 */

module.exports = function (endYear) {
	var weekday = 2,
		day = 1,
		month = 1,
		year = 1901,
		sundays = 0,
		nextMonth;

	while (year < endYear) {
		// Reset the day of week counter
		if (weekday === 8) {
			weekday = 1;
		}

		// Month with 31 days
		nextMonth = day > 31;

		// Month with 30 days
		nextMonth = (day === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) || nextMonth;

		// February with 28 days
		nextMonth = (day === 29 && month === 2 && (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0))) || nextMonth;

		// February with 29 days
		nextMonth = (day === 30 && month === 2 && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) || nextMonth;

		if (nextMonth) {
			// Reset the month counter
			day = 1;
			month++;

			if (month === 13) {
				// Reset the year counter
				month = 1;
				year++;
			}

			if (weekday === 7) {
				sundays++;
			}
		}

		weekday++;
		day++;
	}

	return sundays;
};