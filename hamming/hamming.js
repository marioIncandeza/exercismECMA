class Hamming {

	compute(string1, string2) {
		if (string1.length !== string2.length) {
			throw new Error('DNA strands must be of equal length.');
		}
		let sequence1 = string1.split(''),
			sequence2 = string2.split(''),
			ham = 0;
		sequence1.forEach((nucleotide, inx) => {
			if (nucleotide !== sequence2[inx]) {
				ham++;
			}
		});
		return ham;
	}
	
}

export default Hamming;