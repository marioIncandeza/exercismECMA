class WordProblem {

	constructor(question) {
		this.question = question;
	}

	answer() {
		var operands = this.question.match(/plus|minus|multiplied|divided/g);
		if (!operands) {
			throw new ArgumentError();
		}
		var operations = {
			plus: (x,y) => x + y,
			minus: (x,y) => x - y,
			multiplied: (x,y) => x * y,
			divided: (x,y) => x / y
		};
		var numbers = this.question.match(/\d+|-\d+/g).map(Number);
		return numbers.reduce((accumulator, currentValue, currentIndex) => {
			return operations[operands[currentIndex - 1]](accumulator, currentValue);
		});
	}
}

class ArgumentError extends Error {

	constructor() {
		super();
		this.message = 'no';
	}

}

export {WordProblem, ArgumentError};