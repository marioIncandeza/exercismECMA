function at(hour, minute) {
	return {
		toString: function() {
			let hr = '',
				min = '';
			if (!minute) {
				minute = 0;
			}
			if (minute >= 60) {
				hour += Math.floor(minute / 60);
				minute = minute % 60;
			}
			min = minute.toString();
			if (minute < 10) {
				min = '0' + min; 
			}
			if (hour < 0) {
				let bruni = Math.abs(hour % 24);
				hour = 24 - bruni;
			}
			hour = hour % 24; 
			hr = hour.toString();
			if (hour < 10) {
				hr = '0' + hr;
			}
			return hr + ':' + min;
		}
	}
}

export default at;