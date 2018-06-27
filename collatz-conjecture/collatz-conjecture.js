function steps(n) {
	if (n <= 0) {
		throw new Error('Only positive numbers are allowed');
	}
	let numSteps = 0;
	while (n !== 1){
		if (n % 2) {
			n = 3*n + 1;
		} else {
			n = n/2;
		}
		numSteps++;
	}
	return numSteps;
}

export default steps;