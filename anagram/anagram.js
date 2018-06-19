class Anagram {

	constructor(word) {
		this._word = word;
	}

	matches(candidates) {
		if (arguments.length > 1 || !Array.isArray(candidates)) {
			let arghhhs = [].slice.call(arguments);
			var ringers = arghhhs;
		} else {
			var ringers = candidates;	
		}
		return ringers.filter(el => isAnagram(this._word, el));
	}

}

function isAnagram(word, candidate) {
	let letters = word.toLowerCase().split('').sort().join('');
	let candidateLetters = candidate.toLowerCase().split('').sort().join('');
	if (word.toLowerCase() === candidate.toLowerCase()) {
		return false;
	}
	return (letters === candidateLetters ? true : false); 
}

export default Anagram;