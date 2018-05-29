class Binary {

	constructor(inputString) {
		this.binary = inputString;
	}

	toDecimal() {
		if (this.binary.match(/[^01]/g)) {
			return 0;
		}
		var binaryArray = this.binary.split('').map(Number);
		return binaryArray.reduce((accumulator, currentValue, currentIndex) => { return accumulator + Math.pow(2,binaryArray.length-(currentIndex+1))*currentValue; }, 0);
	}

}

export default Binary;