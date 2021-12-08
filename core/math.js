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