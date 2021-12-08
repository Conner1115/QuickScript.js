String.prototype.splitBy = function (N) {
  let re = new RegExp(`.{1,${N}}`, "sg");
  return this.match(re);
};

String.prototype.cipher = function(rot){
    if(!rot){rot=1;}
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let alph2 = alph.toUpperCase();
    let res = "";
    this.split('').forEach(x => {
        if(/[a-z]/.test(x)){
        if(alph.indexOf(x) !== -1){
            let ind = alph.indexOf(x) + rot;
            res+=alph[ind%alph.length];
            
        }
        }else if(/[A-Z]/.test(x)){
        if(alph2.indexOf(x) !== -1){
            let ind = alph2.indexOf(x) + rot;
            res+=alph2[ind%alph2.length];
            
        }
        }else{
            res += x;
        }
    });
    return res;
}

String.prototype.countOf = function (string) {
  return this.match(new RegExp(string, "g"))?.length ?? 0;
};

String.prototype.toRx = function(flag){
    return new RegExp(this.replace(/\W/g, (x) => "\\"+x), flag);
}

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

String.prototype.extract = function(reg,s){
    if(s == undefined){
        s = " ";
    }
    let res = [];
    this.split(s).forEach(x => {
        if(reg.test(x)){
            res.push(x);
        }
    })
    return res;
}

String.prototype.reduce = function(...args){
  return this.split("").reduce(...args);
}

String.prototype.map = function(...args){
  return this.split("").map(...args).join("");
}

String.prototype.forEach = function(...args){
  return this.split("").forEach(...args);
}

String.prototype.ToCamelCase = function () {
  let STR = this.toLowerCase()
    .trim()
    .replace(/[ -_]/g, " ")
    .split(" ")
    .map(word => word.replace(word[0], word[0].toString().toUpperCase()))
    .join("");
  return STR.replace(STR[0], STR[0].toLowerCase());
};