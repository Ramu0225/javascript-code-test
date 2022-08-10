const fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, data) {
	if (err) {
		return console.log(err);
	}
	console.time("answer time");
	let d = data.split("\n").map((v) => Number(v));
	let count = 0;
	for (let i = 0; i < d.length - 3; i++) {
		const firstStSum = d[i] + d[i + 1] + d[i + 2];
		const secondStSum = d[i + 1] + d[i + 2] + d[i + 3];
		if (secondStSum > firstStSum) {
			count++;
		}
	}
	console.timeEnd("answer time");
	console.log(count);
});
fs.readFile("./input2.txt", "utf-8", function (err, data) {
	if (err) {
		return console.log(err);
	}
	let command = data.split("\n").map((v) => v.split("[0-9]").map((s) => s.split(" ")));
	console.log("data", command)
})
// fs.readFile("./input.txt", "utf8", function (err, data) {
// 	if (err) {
// 		return console.log(err);
// 	}
// 	console.time("answer time2");
// 	let d = data.split("\n").map((v) => Number(v));
// 	let sumOftThreeArray = [];
// 	for (let i = 0; i < d.length - 3; i++) {
// 		let sum = 0;
// 		for (let j = i; j < i + 3; j++) {
// 			sum += d[j];
// 		}
// 		sumOftThreeArray.push(sum);
// 	}
// 	let count = 0;
// 	for (let i = 0; i < sumOftThreeArray.length; i++) {
// 		if (sumOftThreeArray[i + 1] > sumOftThreeArray[i]) {
// 			count++;
// 		}
// 	}
// 	console.timeEnd("answer time2");
// 	console.log(count, "count");
// });
