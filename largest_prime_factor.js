function largestPrimeFactor(n) {
  let primeFactor = [];
  let primeFactor2 = [];
  for (let i = 2; i <= n-1; i++){
    if (n % i == 0) {
      primeFactor.push(i);
      for (let j = 2; j < i;j++)
      {
        if (i % j == 0) {
          primeFactor2.push(i);
          break;
        }
      }  
    }
  }
  primeFactor = primeFactor.filter(val=> !primeFactor2.includes(val));
  return Math.max(...primeFactor);
}
module.exports= largestPrimeFactor;