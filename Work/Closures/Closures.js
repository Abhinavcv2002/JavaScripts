function outerfun(outervar){
    return function innerfun(bcd){
        console.log(outervar);
        console.log(bcd);
        
        
    }
}

let a = outerfun(10);
console.log(a);
a(100)
     
