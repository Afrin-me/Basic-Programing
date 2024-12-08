function findPrime(num){
    let count = 0;
    for(var i=1; i<=num; i++){
        if(num % i ===0){
          count++
        }
    }
    if(count==2){
        console.log(true);
    }else{
        console.log(false)
    }
}
findPrime(3)

// odd-even 
function evenOdd(num){
    if(num % 2===0){
        console.log(true)
    }else{
        console.log(falseg)
    }
}
evenOdd(4)