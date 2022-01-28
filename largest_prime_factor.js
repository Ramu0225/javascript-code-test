function largestPrimeFactor(n) {
  let primeFactor = [];
  for (let i = 2; i <= n; i++){
    if (n % i == 0) {
      if (i % 2 !== 0 && i%3 !== 0) {
          primeFactor.push(i);
        }
      
    }
  }
  console.log(primeFactor);
  console.log(Math.max(...primeFactor));
}
largestPrimeFactor(13195);