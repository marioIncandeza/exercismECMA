class Bob {

  hey(message) {
  	if (message == false) {
  		return 'Fine. Be that way!'
  	}
    if (message.toUpperCase() === message && message.match(/[A-Za-z]/g)) {
    	if (message.match(/\?/g)) {
    		return 'Calm down, I know what I\'m doing!'
    	}
    	return 'Whoa, chill out!';
    }
    if (message.match(/\?$/g)) {
    	return 'Sure.'
    }
    return 'Whatever.';
  }
  
}

export default Bob;

