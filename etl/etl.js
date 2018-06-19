function transform(old) {
	let neu = {};
	let lower = '';
	for (let property in old) {
		for (let x = 0; x < old[property].length; x++){
			lower = String(old[property][x]).toLowerCase();
			neu[lower] = Number(property);
		}
	}
	return neu;
}

export default transform;