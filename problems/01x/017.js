/**
 * problems/01x/017.js
 * Number letter counts
 */

function numberToWord (n) {
	var words = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'hundred',
		1000: 'thousand'
	};

	var count = n,
		string = '';

	if (count >= 1000) {
		string += words[Math.floor(count / 1000)] + ' ' + words[1000] + ' ';
		count %= 1000;
	}

	if (count >= 100) {
		string += words[Math.floor(count / 100)] + ' ' + words[100] + ' ';
		count %= 100;
	}

	if (n >= 100 && n % 100 !== 0) {
		string += 'and ';
	}

	if (count >= 21) {
		string += words[Math.floor(count / 10) + '0'] + '-';
		count %= 10;
	}

	if (count > 0) {
		string += words[count];
	}

	return string;
}

module.exports = function (limit) {
	var count = 0;

	for (var i = 1; i <= limit; i++) {
		count += numberToWord(i).replace(/\s|-/g, '').length;
	}

	return count;
};
