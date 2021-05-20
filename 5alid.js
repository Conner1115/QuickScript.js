import './core/core.js';


// 5alidshammout
/*

    ____________________
   / ___________________\
  | ____________________ |
  | |                  | |
  | | c> mkdir code    | |
  | | c> cd code       | |
  | | c/code> npm init | |
  | |__________________| |
  \____________________⨀/ 
      / """"""""""" \   
     / ::::::::::::: \
    (_________________)

*/


/////////////////////////////

String.prototype.countOf = function(string) {
  return this.match(new RegExp(string, "g")).length;
};

/////////////////////////////

Number.prototype.sumDigits = function() {
  nums = this.toString().split("");
  return eval(
    nums.join("+")
  );
}

///////////////////////////// 

Array.prototype.roundAll = function() {
  output = []
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] === "number"
      ? output.push(
        Math.round(
          arr[i]
        )
      )
      : output.push(arr[i])
  }
  return output
}

/////////////////////////////

Array.prototype.prevelantType = function() {
  let types = [];
  for (let i = 0; i < this.length; i++) {
    types.push(typeof this[i])
  }
  const mostFrequent = arr =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

  return mostFrequent(types)
}