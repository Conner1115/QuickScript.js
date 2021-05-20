
String.prototype.splitBy = function(n){
    var res = [];
    for(var i = 0; i < this.length; i+=n){
        var x = "";
        for(var j = 0; j < n; j++){
            x+=this[j+i]||"";
        }
        res.push(x);
    }
    return res;
}

String.prototype.cipher = function(rot){
    if(!rot){rot=1;}
    var alph = "abcdefghijklmnopqrstuvwxyz";
    var alph2 = alph.toUpperCase();
    var res = "";
    this.split('').forEach(x => {
        if(/[a-z]/.test(x)){
        if(alph.indexOf(x) !== -1){
            var ind = alph.indexOf(x) + rot;
            res+=alph[ind%alph.length];
            
        }
        }else if(/[A-Z]/.test(x)){
        if(alph2.indexOf(x) !== -1){
            var ind = alph2.indexOf(x) + rot;
            res+=alph2[ind%alph2.length];
            
        }
        }else{
            res += x;
        }
    });
    return res;
}

String.prototype.countOf = function (string) {
  return this.match(new RegExp(string, "g")).length;
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
    var res = [];
    this.split(s).forEach(x => {
        if(reg.test(x)){
            res.push(x);
        }
    })
    return res;
}