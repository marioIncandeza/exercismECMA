class List {

	constructor(elements) {
		if (!elements) {
			this._list = [];
		} else {
			this._list = elements;
		}
		this.values = this._list;
	}

	append(addition) {
		if (!this._list) {
			return addition;
		}
		if (!addition._list) {
			return this;
		}
		let originalCounter = this.length();
		let appendCounter = addition.length();
		for (let k = 0; k < appendCounter; k++) {
			this._list[originalCounter + k] = addition._list[k];
		}
		return new List(this._list);
	}

	concat(addition) {
		return this.append(addition);
	}

	filter(func) {
		if (! (typeof func === 'Function' || typeof func === 'function') )
			throw new TypeError();
		let length = this.length();
		let res = new Array(length),
			t = this, c = 0, i = -1;
		while (++i !== length) {
			if (i in this._list) {
				if (func(t._list[i], i, t)) {
					res[c++] = t._list[i];
				}
			}
		}
		res.length = c;
		return new List(res);
	}

	length() {
		let len = 0;
		while (this._list[len]) {
			len++;
		}
		return len;
	}

	map(func) {
		if (! (typeof func === 'Function' || typeof func === 'function') )
				throw new TypeError();
			let length = this.length();
			let res = new Array(length),
				t = this, c = 0, i = -1;
			while (++i !== length) {
				res[c++] = func(t._list[i], i, t);
			}
			return new List(res);
	}

	foldl(func, initialValue) {
		if (! (typeof func === 'Function' || typeof func === 'function') )
					throw new TypeError();
				let length = this.length();
				let res = 0,
					i = -1, t = this;
				if (initialValue)
					res = initialValue; 
				while (++i !== length) {
					res = func(res, t._list[i]);
				}
				return res;	
	}

	foldr(func, initialValue) {
		if (! (typeof func === 'Function' || typeof func === 'function') )
					throw new TypeError();
				let length = this.length();
				let res = 0,
					i = length, t = this;
				if (initialValue)
					res = initialValue; 
				while (--i !== -1) {
					res = func(res, t._list[i]);
				}
				return res;	
	}

	reverse() {
		let length = this.length();
		let res = new Array(length),
			c = 0, i = -1, t = this;
		while (++i !== length) {
			res[c++] = t._list[length - i - 1];
		}
		return new List(res);
	}

}

export default List;