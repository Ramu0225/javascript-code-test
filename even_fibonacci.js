function fiboEvenSum(n) {
	if (n <= 1) {
		return 0;
	} else {
		let evenSum = 0,
			prevFibNum = 1,
			fibNum = 2;
		for (let i = 2; fibNum <= n; i++) {
			if (fibNum % 2 == 0) {
				evenSum += fibNum;
			}
			[prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
		}
		return evenSum;
	}
}
module.exports=fiboEvenSum;
