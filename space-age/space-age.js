class SpaceAge {

    constructor(age) {
    	this.seconds = age;
    	this.earthYears = this.seconds/31557600;
    }

    onEarth() {
    	return Number((this.earthYears).toFixed(2));
    }

    onMercury() {
    	return Number((this.earthYears/0.2408467).toFixed(2));
    }

    onVenus() {
    	return Number((this.earthYears/0.61519726).toFixed(2));
    }

    onMars() {
    	return Number((this.earthYears/1.8808158).toFixed(2));
    }

    onJupiter() {
    	return Number((this.earthYears/11.862615).toFixed(2));
    }

    onSaturn() {
    	return Number((this.earthYears/29.447498).toFixed(2));
    }

    onUranus() {
    	return Number((this.earthYears/84.016846).toFixed(2));
    }

    onNeptune() {
    	return Number((this.earthYears/164.79132).toFixed(2));
    }
    
}

export default SpaceAge;