class Robot {

	constructor() {
		this._name = makeid();
		var usedNames = new Set();
		usedNames.add(this._name);
		this.nameHistory = usedNames;
	}

	get name() {
		return this._name;
	}

	reset() {
		this._name = makeid();
		while (this.nameHistory.has(this._name)) {
			this._name = makeid();
		}
		this.nameHistory.add(this._name);
	}

}

function makeid() {
	var text = '';
	var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var nums = '0123456789'

	for (var i = 0; i < 5; i++) {
		i > 1 ? text += nums.charAt(Math.floor(Math.random() * nums.length)) : text += letters.charAt(Math.floor(Math.random() * letters.length));
	}
	return text;
}

export default Robot;