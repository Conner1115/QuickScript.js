Number.prototype.sumDigits = function(){
  var nums = this.toString().split("");
  return eval(
    nums.join("+")
  );
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