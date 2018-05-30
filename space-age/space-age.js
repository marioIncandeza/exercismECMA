class SpaceAge {

    constructor(age) {
    	this.seconds = age;
    	this.earthYears = this.seconds/31557600;
    }

    onEarth() {
    	return calculateAge(this.earthYears, 1);
    }

    onMercury() {
    	return calculateAge(this.earthYears, 0.2408467);
    }

    onVenus() {
    	return calculateAge(this.earthYears, 0.61519726);
    }

    onMars() {
    	return calculateAge(this.earthYears, 1.8808158);
    }

    onJupiter() {
    	return calculateAge(this.earthYears, 11.862615);
    }

    onSaturn() {
    	return calculateAge(this.earthYears, 29.447498);
    }

    onUranus() {
    	return calculateAge(this.earthYears, 84.016846);
    }

    onNeptune() {
    	return calculateAge(this.earthYears, 164.79132);
    }
    
}

function calculateAge(earthYears, orbit) {
    return +(earthYears/orbit).toFixed(2);
}


export default SpaceAge;