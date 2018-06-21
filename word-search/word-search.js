class WordSearch {

	constructor(grid) {
		this._grid = grid;
	}

	find(word) {
		let a = searchRow.call(this, word),
			b = searchRowReverse.call(this, word),
			c = searchColumn(word, rows2columns(this._grid)),
			d = searchColumnDownUp(word, rows2columnsDownUp(this._grid)),
			output = Object.assign(a, b, c, d);
		return output;
	}

}

function rows2columns(grid) {
	let columns = [],
		letters = [],
		output = [];
	for (let c = 0; c < grid[0].length; c++) {
		columns[c] = [];
		for (let x = 0; x < grid.length; x++) {
			letters = grid[x].split('');
			columns[c].push(letters[c]); 
		} 
	}
	output = columns.map(el => el.join(''));
	return output;
}

function rows2columnsDownUp(grid) {
	let columns = [],
		letters = [],
		output = [];
	for (let c = 0; c < grid[0].length; c++) {
		columns[c] = [];
		for (let x = grid.length - 1; x >= 0; x--) {
			letters = grid[x].split('');
			columns[c].push(letters[c]); 
		} 
	}
	output = columns.map(el => el.join(''));
	return output;
}

function searchColumn(words, transformedGrid) {
	let split = [],
		search = {},
		results = {},
		letters = [];
	for (let c = 0; c < words.length; c++) {
		results[words[c]];
		letters = words[c].split('');
		for (let x = 0; x < transformedGrid.length; x++) {
			split = transformedGrid[x].split('');
			search = isSublist(letters, split);
			if (search.status) {
				results[words[c]] = {end: [search.end, x + 1], start: [search.begin, x + 1]};
			}
		}
	}
	return results;
}

function searchColumnDownUp(words, transformedGrid) {
	let split = [],
		search = {},
		results = {},
		letters = [];
	for (let c = 0; c < words.length; c++) {
		results[words[c]];
		letters = words[c].split('');
		for (let x = 0; x < transformedGrid.length; x++) {
			split = transformedGrid[x].split('');
			search = isSublist(letters, split);
			if (search.status) {
				results[words[c]] = {end: [split.length - search.end + 1, x + 1], start: [split.length - search.begin + 1, x + 1]};
			}
		}
	}
	return results;
}

function searchRow(words) {
	let splitRow = [],
		search = {},
		results = {},
		letters = [];
	for (let c = 0; c < words.length; c++) {
		results[words[c]];
		letters = words[c].split('');
		for (let x = 0; x < this._grid.length; x++) {
			splitRow = this._grid[x].split('');
			search = isSublist(letters, splitRow);
			if (search.status) {
				results[words[c]] = {end: [x + 1, search.end], start: [x + 1, search.begin]};
			}
		}
	}
	return results;
}

function searchRowReverse(words) {
	let splitRow = [],
		search = {},
		results = {},
		letters = [];
	for (let c = 0; c < words.length; c++) {
		results[words[c]];
		letters = words[c].split('');
		for (let x = 0; x < this._grid.length; x++) {
			splitRow = this._grid[x].split('').reverse();
			search = isSublist(letters, splitRow);
			if (search.status) {
				results[words[c]] = {end: [x + 1, splitRow.length - search.end + 1], start: [x + 1, splitRow.length - search.begin + 1]};
			}
		}
	}
	return results;
}

function isEqual(arr1, arr2) {
	if (!arr1 && !arr2) {
		return true;
	}
	if (!arr1 || !arr2) {
		return false;
	}
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let x = 0; x < arr1.length; x++) {
		if (arr1[x] !== arr2[x]) {
			return false;
		}
	}
	return true;
}

function isSublist(arr1, arr2) {
	for (let x = 0; x <= arr2.length - arr1.length; x++) {
		let compare = arr2.slice(x, x + arr1.length);
		if (isEqual(arr1, compare)) {
			return {status: true, begin: x + 1, end: x + arr1.length};
		}
	}
	return {status: false};	
}

export default WordSearch;