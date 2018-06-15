class Beer {

	verse(verse) {
		return brew(verse);
	}

	sing(begin, end) {
		if (!begin && !end) {
			begin = 99;
			end = 0;
		}
		if (!end) {
			end = 0;
		}
		let song = '';
		for (let x = begin; x >= end; x--) {
			song += brew(x);
			if (x !== end) {
				song += '\n';
			}
		}
		return song;
	}

}

function brew(verse) {
	return `${verse < 1 ? 'No more' : verse} bottle${verse > 1 ? 's' : verse < 1 ? 's' : ''} of beer on the wall, ${verse < 1 ? 'no more' : verse}\
 bottle${verse > 1 ? 's' : verse < 1 ? 's' : ''} of beer.
${verse > 1 ? 'Take one down and pass it around' : verse < 1 ? 'Go to the store and buy some more' : 'Take it down and pass it around'},\
 ${verse > 1 ? verse - 1 : verse < 1 ? '99' : 'no more'} bottle${verse === 2 ? '' : 's'} of beer on the wall.
`;
}

export default new Beer();