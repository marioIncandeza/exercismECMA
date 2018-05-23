class Pangram {

     constructor(sentence) {
     	this.sentence = sentence;
     }

     isPangram() {
     	var letters = this.sentence.toLowerCase().split('');
     	var re = /[a-z]/g;
     	var betterLetters = letters.filter(el => el.match(re)).sort();
     	var noDuplicates = uniqEs6(betterLetters)

     	return (noDuplicates.length === 26);
     }
}

//telekosmos/uniq.js
var uniqEs6 = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
}

export default Pangram;