class Gigasecond {

	constructor(date) {
		this.d = date;
	}

	date() {
		var gigasecDay = new Date(this.d.valueOf()+Math.pow(10,12));
	    return gigasecDay;
	}

}

export default Gigasecond;