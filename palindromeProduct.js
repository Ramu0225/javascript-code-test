function palindrome(n) {
  let revString = n.split('').reverse().join('')
  console.log(revString);
  if (revString == n) {
    return true;
  }
  return false;
}
console.log(palindrome("123211"))

function palindromeArr(n) {
  var revString = [];
  
  //console.log(n.length);
  for (let i = n.length - 1; i = 0; i--){
    //let revString = [];
    revString.Push(n[i]);
    console.log(revString,i);
  }
	console.log(revString);
	if (revString == n) {
		return true;
	}
	return false;
}
console.log(palindromeArr([1,2,3,2,1]));
