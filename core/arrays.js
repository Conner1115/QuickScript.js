Array.prototype.locate = function(item){
    let val = 0;
    for(let i in this){
        val++;
        if(this[i].includes(item)&&val < this.length){
            return this[i];
        }
        if(val >= this.length){
            return null;
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
        for(let i in this){
            if(this[i] === input){
                this[i] = input2;
            }
        }
        return this;
    }
    if(input instanceof RegExp){
        for(let i in this){
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
        for(let i in this){
            this[i] = input2(i);
        }
    }
    
    
}

Array.prototype.replace = function(input, input2){
    if(typeof input === "string"){
        for(let i in this){
            if(this[i] === input){
                this[i] = input2;
                break;
            }
        }
        return this;
    }
    if(input instanceof RegExp){
        for(let i in this){
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
        for(let i in this){
            this[i] = input2(i);
        }
    }
    
    
}

Array.prototype.random = function(resultsNb) {
  return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.remAll = function(item){
    let matches = this.filter(x => x === item).length;
    for(let i = 0; i < matches; i++){
        this.splice(this.indexOf(item), 1);
    }
    return this;
}

Array.prototype.sift = function(){
    return [...new Set(this)];
}

Array.prototype.diff = function(that){
    let longer = this.length > that.length ? this : that;
    let shorter = this.length > that.length ? that : this;
    let res = [];
    for(let i in longer){
        if(!shorter.includes(longer[i])){
            res.push(longer[i]);
        }
    }
    for(let i in shorter){
        if(!longer.includes(shorter[i])){
            res.push(shorter[i]);
        }
    }
    return res.filter(x => typeof x !== "function");
}

Array.prototype.comm = function(that){
    let longer = this.length > that.length ? this : that;
    let shorter = this.length > that.length ? that : this;
    let res = [];
    for(let i in longer){
        if(shorter.includes(longer[i])){
            res.push(longer[i]);
        }
    }
    for(let i in shorter){
        if(longer.includes(shorter[i])){
            res.push(shorter[i]);
        }
    }
    return [...new Set(res.filter(x => typeof x !== "function"))];
}

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

Array.prototype.listTypes = function(){
    let res = [];
    this.forEach(x => {
        res.push(typeof x);
    });
    return res;
};
Math.randRange = function(m1, m2){
    if(m1 || m2){

    let min = m1 > m2 ? m2 : m1;
    let max = m1 > m2 ? m1 : m2;
    return m2 ? min+(Math.random()*(max-min)) : Math.random() * m1;

    }else{
        return Math.random()
    }
};

Math.dist = function(...args){
  if(args.length == 0 || args.length % 2){
    return null;
  }

  let total = 0;
  for(let i = 0; i < args.length / 2; i ++){
    total += (args[i] - args[args.length/2 + i]) ** 2
  }

  return total ** 0.5;
};

Math.dot = function(...args){
  if(args.length == 0 || args.length % 2){
    return null;
  }

  let total = 0;
  for(let i = 0; i < args.length / 2; i ++){
    total += args[i] * args[args.length/2 + i]
  }

  return total;
};
