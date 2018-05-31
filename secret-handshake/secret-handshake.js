class SecretHandshake {

	constructor(num) {
		if (typeof num !== 'number') {
			throw new Error('Handshake must be a number');
		}
		this.decimal = num;
		this.binary = num.toString(2);
	}

	commands() {
		var commands = [];
		var digits = this.binary.split('').reverse();
		digits.forEach( (el, inx) => {
			if (inx === 0 && el == 1) {
				commands.push('wink');
			} 
			if (inx === 1 && el == 1) {
				commands.push('double blink');
			}
			if (inx === 2 && el == 1) {
				commands.push('close your eyes');
			}
			if (inx === 3 && el ==1) {
				commands.push('jump');
			}
			if (inx === 4 && el == 1) {
				commands = commands.reverse();
			}});
		return commands;
	}

}

export default SecretHandshake;