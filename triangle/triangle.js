class Triangle {

	constructor(a, b, c) {
		this._a = a;
		this._b = b;
		this._c = c;
	}

	kind() {
		let sides = ['_a', '_b', '_c'];
		for (let c = 0; c < sides.length; c++) {
			if (this[sides[c]] <= 0) {
				throw new Error();
			}
		}
		if (this._a + this._b <= this._c || this._a + this._c <= this._b || this._b + this._c <= this._a) {
			throw new Error('Sides cannot violate Triangle Inequality Theorem.');
		}
		if (this._a === this._b && this._a === this._c) {
			return 'equilateral';
		}
		if (this._a === this._b || this._a === this._c || this._b === this._c) {
			return 'isosceles';
		}
		return 'scalene';
	}

}

export default Triangle;