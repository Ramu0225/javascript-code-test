// technical interview with Arc.dev to become verified developer
function fibo(n) {
	if (n <= 1) {
		return 0;
	} else {
		let firstNum = 0;
		let secNum = 1;
		let fibonacciSeries = [0, 1];
		for (let i = 0; secNum <= n; i++) {
			[firstNum, secNum] = [secNum, firstNum + secNum];
			fibonacciSeries.push(secNum);
		}
		return fibonacciSeries;
	}
}
const fibonacciNumbers = fibo(10);
console.log("fibonacciNumbers", fibonacciNumbers);