Array.prototype.locate = function(item){
    let val = 0;
    for(let i in this){
        val++;
        if(this[i].includes(item)&&val < this.length){
            return this[i];
        }
        if(val >= this.length){
            return false;
        }
    }
}

Array.prototype.locateAll = function(item){
    return this.filter(x => x.includes(item));
};

Array.prototype.rem = function(item){
    this.splice(this.indexOf(item), 1);
    return this;
}

Array.prototype.replaceAll = function(input, input2){
    if(typeof input === "string"){
        for(var i in this){
            if(this[i] === input){
                this[i] = input2;
            }
        }
        return this;
    }
    if(input instanceof RegExp){
        for(var i in this){
            if(input.test(this[i])){
                if(typeof input2 === "function"){
                    
                        this[i] = input2(this[i]);
                    
                }else{
                    this[i] = input2;
                }
            }
        }
        return this;
    }
    if(typeof input2 === "function"){
        for(var i in this){
            this[i] = input2(i);
        }
    }
    
    
}

Array.prototype.replace = function(input, input2){
    if(typeof input === "string"){
        for(var i in this){
            if(this[i] === input){
                this[i] = input2;
                break;
            }
        }
        return this;
    }
    if(input instanceof RegExp){
        for(var i in this){
            if(input.test(this[i]) && input.global){
                if(typeof input2 === "function"){
                    
                        this[i] = input2(this[i]);
                    
                }else{
                    this[i] = input2;
                }
            }

            if(input.test(this[i]) && !input.global){
                if(typeof input2 === "function"){
                    
                        this[i] = input2(this[i]);
                    
                }else{
                    this[i] = input2;
                }
                break;
            }
            
        }
        return this;
    }

    if(typeof input2 === "function"){
        for(var i in this){
            this[i] = input2(i);
        }
    }
    
    
}

Array.prototype.random = function(resultsNb) {
  return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.remAll = function(item){
    var matches = this.filter(x => x === item).length;
    for(var i = 0; i < matches; i++){
        this.splice(this.indexOf(item), 1);
    }
    return this;
}

Array.prototype.sift = function(){
    return [...new Set(this)];
}

Array.prototype.diff = function(that){
    var longer = this.length > that.length ? this : that;
    var shorter = this.length > that.length ? that : this;
    var res = [];
    for(var i in longer){
        if(!shorter.includes(longer[i])){
            res.push(longer[i]);
        }
    }
    for(var i in shorter){
        if(!longer.includes(shorter[i])){
            res.push(shorter[i]);
        }
    }
    return res.filter(x => typeof x !== "function");
}

Array.prototype.comm = function(that){
    var longer = this.length > that.length ? this : that;
    var shorter = this.length > that.length ? that : this;
    var res = [];
    for(var i in longer){
        if(shorter.includes(longer[i])){
            res.push(longer[i]);
        }
    }
    for(var i in shorter){
        if(longer.includes(shorter[i])){
            res.push(shorter[i]);
        }
    }
    return [...new Set(res.filter(x => typeof x !== "function"))];
}

Array.prototype.roundAll = function(){
  output = []
  let arr = this;
  
  for(let i = 0; i < arr.length; i++){
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

Array.prototype.listTypes = function(){
    var res = [];
    this.forEach(x => {
        res.push(typeof x);
    });
    return res;
};