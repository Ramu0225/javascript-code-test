function multiplesOf3and5(number) {
	let count = 0;
	for (let i = 0; i <= number-1; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			count = count + i;
		}
	}
	console.log(count);
	return count;
}

module.exports= multiplesOf3and5;
