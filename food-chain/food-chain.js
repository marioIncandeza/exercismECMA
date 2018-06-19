class Song {

	constructor(){
		let fly = {animal: 'fly', tag: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.'};
		let spider = {animal: 'spider', tag: 'It wriggled and jiggled and tickled inside her.'};
		let bird = {animal: 'bird', tag: 'How absurd to swallow a bird!'};
		let cat = {animal: 'cat', tag: 'Imagine that, to swallow a cat!'};
		let dog = {animal: 'dog', tag: 'What a hog, to swallow a dog!'};
		let goat = {animal: 'goat', tag: 'Just opened her throat and swallowed a goat!'};
		let cow = {animal: 'cow', tag: 'I don\'t know how she swallowed a cow!'};
		let horse = {animal: 'horse', tag: 'She\'s dead, of course!'};
		this.menu = [fly, spider, bird, cat, dog, goat, cow, horse];
	}

	verse(verse) {
		return singVerse.call(this, verse);
	}

	verses(begin, end) {
		if (!arguments) {
			begin = 1;
			end = 8;
		}
		let x = begin,
			out = '';
		for (x ;x <= end; x++) {
			out += singVerse.call(this, x);
			out += '\n';
		}
		return out;
	}

}

function singVerse(verse) {
	verse--;
	let out = `I know an old lady who swallowed a ${this.menu[verse].animal}.\n`;
	out += `${this.menu[verse].tag}\n`;
	if (verse === 7) {
		return out;
	}
	let count = 1;
	while (verse - count !== -1) {
		out += `She swallowed the ${this.menu[verse - count + 1].animal} to catch the ${this.menu[verse-count].animal}`;
		if (verse - count === 1) {
			out += ' that wriggled and jiggled and tickled inside her.\n';
		} else {
			out += '.\n';
		}
		count++;
	}
	if (verse > 0) {
		out += `${this.menu[0].tag}\n`
	}
	return out;
}

export default Song;