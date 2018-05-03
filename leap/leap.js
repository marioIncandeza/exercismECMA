class Year {
	constructor(year){
		this.year = year;
	}
	isLeap() {
	   if (this.year % 100 === 0) {
        if (this.year % 400 !== 0) {
        	return false;
        }
        return true;
	   } else if(this.year % 4 === 0) {
	   	return true;
	   }
	   return false;
	}
}

export default Year;
