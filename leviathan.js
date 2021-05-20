//LeviathanProgramming's private editing file
import './core/core.js';

String.prototype.extract = function(reg, s) {
    if (s == undefined) {
        s = " ";
    }
    var res = [];
    this.split(s).forEach(x => {
        if (reg.test(x)) {
            res.push(x);
        }
    })
    return res;
}

Number.prototype.isPrime = function() {
    var res = [];
    for (var i = 0; i < this; i++) {
        if (i !== 0 && this % i !== 0) {
            res.push(true);
        } else {
            res = [false];
        }
    }
    return res.length == this - 1;
}

var a = 97;
console.log(a.isPrime()); //returns "Hello World!!!"
