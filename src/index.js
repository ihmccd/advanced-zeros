module.exports = function getZerosCount(number, base) {
  
  // Math solutions:
  // http://mathforum.org/library/drmath/view/55844.html
  // http://mathforum.org/library/drmath/view/66749.html
  // below is implementation on JS
  
   // f getPrime - returns arr of prime numbers which product = num  
  
  function getPrime(num){
    let arr = [];
    let divider=2;
    
    while (num!=1){ 
      if (num%divider==0){
        arr.push(divider);
        num=num/divider;
      }
      else{
        divider++;
      }
    }
    return arr;
  }
  
  //

  // f getBaseLig - from MDN, 2^x=8, returns x 
  function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
  
  //

  // f getMinFactor  
  // get Factors on e in array of Primes (factor is how many times number in amount),
  // then get minimum Factor 
  
  function getMinFactor(amount, arr){
    let minFactor = 0;
    for (let i = 0; i<arr.length; i++){
      let divider = 1;
      while(arr[i]==arr[i+1]){
         divider++;
         i++;
      }
     let factors = 0;
     let cell = Math.floor(getBaseLog(arr[i], amount)); 
     for (let j = 1; j<= cell; j++){  
      factors+=Math.floor(amount/Math.pow(arr[i], j)); 
    }
      factors/=divider;
      minFactor > Math.floor(factors) || minFactor == 0 ? minFactor = Math.floor(factors): "";
    }  

    return minFactor;
  }

  return getMinFactor(number, getPrime(base));	
  // your implementation
}