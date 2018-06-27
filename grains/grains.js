import bigInt from './lib/big-integer';

class Grains {

	square(squ) {
		var biggie = bigInt(2);
		return biggie.pow(squ-1).toString();
	}

	total() {
		var biggie = bigInt(2);
		var sum = bigInt();
		for (let squ = 1; squ <= 64; squ++) {
			sum = sum.add(biggie.pow(squ-1));
		}
		return sum.toString();
	}
	
}

export default Grains;