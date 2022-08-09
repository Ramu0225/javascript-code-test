const fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, data) {
	if (err) {
		return console.log(err);
	}
	console.time("answer time");
	const d = data.split("\n").map((v) => Number(v));
	let count = 0;
	for (let i = 0; i < d.length; i++) {
		if (d[i + 1] > d[i]) {
			count++;
		}
	}
	console.timeEnd("answer time");
	console.log(count);
});
