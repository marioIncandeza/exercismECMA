class List {

	constructor(elements) {
		this._list = elements;
	}

	compare(otherList) {
		if (isEqual(this._list, otherList._list)) {
			return 'EQUAL';
		}
		if (!this._list && otherList._list) {
			return 'SUBLIST';
		}
		if (this._list && !otherList._list) {
			return 'SUPERLIST';
		}
		if (this._list.length === otherList._list.length && !isEqual(this._list, otherList._list)) {
			return 'UNEQUAL';
		}
		if (isSublist(this._list, otherList._list)) {
			return 'SUBLIST';
		}
		if (isSuperlist(this._list, otherList._list)) {
			return 'SUPERLIST';
		}
		return 'UNEQUAL';
	}

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
			return true;
		}
	}
	return false;	
}

function isSuperlist(arr1, arr2) {
	return isSublist(arr2, arr1);
}

export default List;