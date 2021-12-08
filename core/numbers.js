Number.prototype.sumDigits = function() {
  return this.toString().match(/\d/g).reduce((a, b) => +a + +b);
}

Number.prototype.isPrime = function() {
  if(this > 1){
    for (let i = 2; i <= this ** 0.5; i++) {
      if(this % i == 0){
        return false;
      }
    }
    return true;
  }else{
    return false;
  }
};

Number.prototype.sequence = function (pattern, length) {
  let x = +this;
  let arr = [x];
  for (let i = 0; i < length - 1; i++) {
    arr.push(pattern(x, i+1));
    x = pattern(x, i+1);
  }
  return arr;
};