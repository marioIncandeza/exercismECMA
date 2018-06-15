class Isogram {

	constructor(word) {
		this.word = word;
	}

	isIsogram() {
		let filtered = this.word.toLowerCase().split('').filter(el => el.match(/[^-\s]/g));
		let set = new Set(filtered);
		return (set.size === filtered.length ? true : false);
	}

}

export default Isogram;