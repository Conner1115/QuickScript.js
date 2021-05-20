Math.randRange = function(m1, m2){
    if(m1 || m2){

    var min = m1 > m2 ? m2 : m1;
    var max = m1 > m2 ? m1 : m2;
    return m2 ? min+(Math.random()*(max-min)) : Math.random() * m1;

    }else{
        return Math.random()
    }
}