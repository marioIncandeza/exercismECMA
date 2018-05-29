class Matrix {

	constructor(inputString) {
		this.rows = rowSplitter(inputString);
		this.columns = columnSplitter(inputString);
	}

}

function rowSplitter(inp) {
	var output = [];
	inp.split('\n').forEach(r => {output.push(r.split(' ').map(Number))});
	return output;
}

function columnSplitter(inp) {
	var output = [];
	var rows = rowSplitter(inp);
	rows.forEach(row => {
		for (var k = 0; k < row.length; k++){
			if(!output[k]) {
				output[k] = [];
			}
			output[k].push(row[k]);
		}});
	return output;
}

export default Matrix;