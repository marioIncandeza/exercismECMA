class Cipher {

	constructor(key) {
		this.key = makeid(key);
	}

	encode(message) {

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