//Lorenzo's private editing file - Work In process (need some additional testing)
import './core/core.js';


/*******************************************
 * The random Function returns 
 * 
 * console.log(["app","dog","app"].random()) > ["cat"]
 * console.log(["app","dog","app"].random(2)) > ["cat","dog","app"]
 * 
 *  *If 0 is given as result Number one element will anyway be extracted:
 * console.log(["app","dog","app"].random(0)) > ["cat"]
 * 
 * Array.prototype.random(resultsNb);
 *******************************************/
Array.prototype.random = function(resultsNb) {
  if (checkNbArgument(resultsNb)) {
    let randElements = [];
    if (resultsNb == undefined || resultsNb == 0) {
      return this[Math.floor(Math.random() * this.length)];
    } 
    for (let i = 0; i < resultsNb; i++) {
      randElements += this[Math.floor(Math.random() * this.length)];
    }
    return randElements; 
  }
}

/*******************************************
 * An cool extra to the random function, as a the cherry on the cake, *random placement* allow you to have a random element 
 * 
 * console.log(["app","dog","app"].random()) > ["cat"]
 * console.log(["app","dog","app"].random(2)) > ["cat","dog","app"]
 * 
 * Array.prototype.randomPlacement(resultsNb);
 *******************************************/
Array.prototype.randomPlacement = function(resultsNb) {
  if (checkNbArgument(resultsNb)) {
    let randElements = [];
    let randPlacements = [];
		let randElement;
    if (resultsNb == undefined || resultsNb == 0) {
			randElement = this[Math.floor(Math.random() * this.length)];
      return randElement + " " + this.indexOf(randElement);
    } 
    for (let i = 0; i < resultsNb; i++) {
			randElement = this[Math.floor(Math.random() * this.length)];
      randElements += randElement;
			randPlacements += this.indexOf(randElement);
    }
    return randElements + " " + randPlacements; 
  }
}

/*******************************************
 * Description - Tested! - Ready for doc
 * 
 * console.log([1, 2, 3].sum()) > 6
 * 
 * 
 * Array.prototype.sum();
 *******************************************/
Array.prototype.sum = function() {
    let sum = this.reduce(function(a, b) {
        return a + b;
    }, 0);
    return sum
}


/*******************************************
 * Description WIP
 * 
 * console.log([1, 2, 3].substract()) > -6
 * 
 * 
 * Array.prototype.substract();
 *******************************************/
Array.prototype.substract = function(resultsNb) {
    let substraction = this.reduce(function(a, b){
        return a - b;
    }, 0);
    return substraction
}


/*******************************************
 * Description WIP
 * 
 * console.log([1, 2, 3].multiplicate()) > -6
 * 
 * 
 * Array.prototype.multiplicate();
 *******************************************/
Array.prototype.multiply = function(resultsNb) {
    let multiplication = this.reduce(function(a, b){
        return a * b;
    }, 0);
    return multiplication
}

/*******************************************
 * Description WIP
 * 
 * console.log([1, 2, 3].multiplicate()) > -6
 * 
 * 
 * Array.prototype.multiplicate();
 *******************************************/
Array.prototype.sum = function(resultsNb) {
    let division = this.reduce(function(a, b){
        return a / b;
    }, 0);
    return division
}