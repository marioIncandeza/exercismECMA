class School {

	constructor() {
		this.currentRoster = {};
	}

	roster() {
		let copy = JSON.parse(JSON.stringify(this.currentRoster));
		return copy;
	}

	add(name, grade) {
		if (!this.currentRoster[grade]) {
			this.currentRoster[grade] = [];
		}
		this.currentRoster[grade].push(name);
		this.currentRoster[grade].sort();
	}

	grade(grade) {
		if (!this.currentRoster[grade]) {
			return [];
		}
		let copy = JSON.parse(JSON.stringify(this.currentRoster[grade]));
		return copy;
	}

}

export default School;