class Binary {

	constructor(inputString) {
		this.binary = inputString;
	}

	toDecimal() {
		if (this.binary.match(/[^01]/g)) {
			return 0;
		}
		var binaryArray = this.binary.split('');
		return binaryArray.reverse().reduce((accumulator, currentValue, currentIndex) => { return accumulator + Math.pow(2,currentIndex)*currentValue; }, 0);
	}

}

export default Binary;