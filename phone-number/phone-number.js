class PhoneNumber {

	constructor(input) {
		this._input = input;
	}

	number() {
		let filtered = this._input.split('').filter(el => el.match(/\d/g));
		let letters = this._input.split('').filter(el => el.match(/[a-z]/g));
		if (filtered.length === 10 && filtered.length + letters.length === this._input.length){
			return null;
		}
		if (filtered.length === 11 && filtered[0] == 1) {
			filtered.shift();
			return filtered.join('');
		}
		if (filtered.length === 10) {
			return filtered.join('');
		}
		return null;
	}
}

export default PhoneNumber;