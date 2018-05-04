class Cipher {

	constructor(key) {
		if (!/^[a-z]+$/.test(key)) {
			throw (new Error('Bad key'));
		}
		this.key = makeid(key);
		this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	}

	encode(message) {
		var workingKey = this.key;
		while (message.length > workingKey.length) {
			workingKey += this.key;
		}
		var keyholder = workingKey.split('');
		var messageholder = message.split('');
		var encodedMessage = '';
		for (let indx = 0; indx < messageholder.length; indx++) {
			let shift = this.alphabet.indexOf(messageholder[indx]) + this.alphabet.indexOf(keyholder[indx]);
			if (shift > 25) {
				shift -= 26;
			}
			encodedMessage += this.alphabet[shift];
		}
		return encodedMessage;
	}

	decode(cypher) {
		var keyholder = this.key.split('');
		var cypherholder = cypher.split('');
		var decodedMessage = '';
		for (let indx = 0; indx < cypherholder.length; indx++) {
			let unshift = this.alphabet.indexOf(cypherholder[indx]) - this.alphabet.indexOf(keyholder[indx]);
			if (unshift < 0) {
				unshift += 26;
			} 
			decodedMessage += this.alphabet[unshift];
		}
		return decodedMessage;
	}
}

function makeid(keyInput) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';
  if (!keyInput) {
	  for (var i = 0; i < 100; i++)
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
		return text;
	}
	return keyInput;
}

export default Cipher;