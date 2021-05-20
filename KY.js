import './core/core.js';

String.prototype.esc = function(do_all = true){
  let new_string = "";
  for(let i = 0; i < this.length; i++){
    let character = this[i].charCodeAt(0).toString(16);
    if(character.length <= 2){
      if(do_all || "abcdef".indexOf(character[0]) >= 0){
        new_string += "\\x" + character;
      }else if(this[i] == "\'"){
        new_string += "\\\'";
      }else if(this[i] == "\""){
        new_string += "\\\"";
      }else if(this[i] == "\\"){
        new_string += "\\\\";
      }else{
        new_string += this[i];
      }
    }else if(character.length == 3){
      new_string += "\\u0" + character;
    }else if(character.length == 4){
      new_string += "\\u" + character;
    }
  }
  return new_string;
};

Object.prototype.toString = function(){
  return JSON.stringify(this);
};

