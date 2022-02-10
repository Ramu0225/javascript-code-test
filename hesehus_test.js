function solution(A) {
  let missingNum;
  let max = A[0];
  let min = 0;
  for (i = 1; i < A.length; i++) {
    if (A[i] > max){
      max = A[i];
    }
    console.log('max',max)
  return max;
}
  for (i = 1; i < A.length; i++) {
    if (A[i] < min){
      min = A[i];
    }
    console.log("min", min);

    return min;
  }

	if (max < 0) {
		missingNum = 1;
		console.log(missingNum);
		return missingNum;
	}
	
	for (let i = min; i <= max + 1; i++) {
		if (!A.includes(i) && i > 0) {
			missingNum = i;
			break;
		}
	}
	console.log(missingNum);
	return missingNum;

}
solution([1,3]);
