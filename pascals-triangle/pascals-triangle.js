class Triangle {

	constructor(numRows) {
		const rows = generateRows(numRows);
		this.rows = rows;
		this.lastRow = rows[rows.length-1];
	}

}

function generateRows(rows) {
	var pascal = [[1]];
	for (let k = 1; k < rows; k++) {
		pascal[k] = [];
		for (let r = 0; r <= k; r++) {
			if (!pascal[k-1][r-1]) {
				pascal[k][r] = pascal[k-1][r];
			}
			else if (!pascal[k-1][r]) {
				pascal[k][r] = pascal[k-1][r-1];
			} else {
				pascal[k][r] = pascal[k-1][r-1] + pascal[k-1][r];
			}
		}
	}
	return pascal;
}

export default Triangle;