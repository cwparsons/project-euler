/**
 * problems/01x/019.js
 * Counting Sundays
 */

// 1 Jan 1900 was a Monday.

// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.

// A leap year occurs on any year evenly divisible by 4,
// but not on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during
// the twentieth century (1 Jan 1901 to 31 Dec 2000)?

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