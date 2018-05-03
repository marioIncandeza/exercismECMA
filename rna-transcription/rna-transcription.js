class Transcriptor {

	constructor() {
		this.pairs = {C:'G', G:'C', A:'U', T:'A'};
		this.validInputs = ['C','G','A','T'];
	}

	toRna(sequence) {
		var RNAsequence = '';
        var DNAnucleotides = [];
        var RNAnucleotides = [];
        DNAnucleotides = sequence.split('');
        for(var n of DNAnucleotides) {
        	if (!this.validInputs.includes(n)) {
        		throw 'Invalid input DNA.';
        	}
        	RNAnucleotides.push(this.pairs[n]);
        }
        RNAsequence = RNAnucleotides.join('');
        return RNAsequence;
	}
}

export default Transcriptor;
