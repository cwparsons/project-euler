/**
 * problems/05x/054.js
 * Poker hands
 */

function cardPosition (card) {
	var index = 'TJQKA'.indexOf(card);

	return index > -1 ? index + 8 : card - 2;
}

function countCards (cards) {
	var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for (var i = 0; i < cards.length; i++) {
		counter[cardPosition(cards[i])]++;
	}

	return counter.join('');
}

function cardSort (a, b) {
	var cards = '123456789TJQKA';

	return cards.indexOf(a) - cards.indexOf(b);
}

function suitSort (a, b) {
	var suits = 'DCHS';

	return suits.indexOf(a) - suits.indexOf(b);
}

function getHandRank (h) {
	var cards = [h[0][0], h[1][0], h[2][0], h[3][0], h[4][0]].sort(cardSort).join(''),
		suits = [h[0][1], h[1][1], h[2][1], h[3][1], h[4][1]].sort(suitSort).join(''),
		counter = countCards(cards),
		value = 0;

	if (counter.indexOf('11111') === 8 && suits.match(/(.)\1{4,}/g)) {
		// Royal Flush
		value += 9;
	} else if (counter.indexOf('11111') > -1 && suits.match(/(.)\1{4,}/g)) {
		// Straight Flush
		value += 8 + counter.indexOf('11111') / 13;
	} else if (counter.indexOf('4') > -1) {
		 // Four of a Kind
		value += 7 + counter.indexOf('4') / 13;
	} else if (counter.indexOf('3') > -1 && counter.indexOf('2') > -1) {
		// Full House
		value += 6 + counter.indexOf('3') / 13;
	} else if (suits.match(/(.)\1{4,}/g)) {
		// Flush
		value += 5 + cardPosition(cards[4]) / 13;
	} else if (counter.indexOf('11111') > -1) {
		// Straight
		value += 4 + counter.indexOf('11111') / 13;
	} else if (counter.indexOf('3') > -1) {
		// Three of a kind
		value += 3 + counter.indexOf('3') / 13;
	} else if (counter.match(/2/g) && counter.match(/2/g).length === 2) {
		// Two pairs
		value += 2 + counter.lastIndexOf('2') / 13;
	} else if (counter.indexOf('2') > -1) {
		// One pair
		value += 1;
		value += counter.indexOf('2') / 13;
	} else {
		// High card
		value += cardPosition(cards[4]) / 13;
	}

	return value;
}

module.exports = function (filename) {
	var data = require(filename),
		wins = 0;

	// Loop through the hands
	for (var i = 0; i < data.length; i++) {
		// If player one wins
		if (getHandRank(data[i][0]) > getHandRank(data[i][1])) {
			wins++;
		}
	}

	return wins;
};
