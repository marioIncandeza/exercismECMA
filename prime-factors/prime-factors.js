class primeFactors {

	for(num) {
		var factors = [];
		for (var k = 2; k <= num; k++){
			while (num%k === 0) {
				factors.push(k);
				num /= k;
			}
		}
		return factors;
	}
}

export default primeFactors;