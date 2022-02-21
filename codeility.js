function solution() {
	// write your code in Javascript
	//
	// you can access DOM Tree using DOM Object Model:
	//    document.getElementsByTagName
	// or using jQuery:
	//    $('some_tag')
	//
	// please note that element.innerText is not supported,
	// you can use element.textContent instead.
	let content = "";
	// document.querySelectorAll("table tr td").each((index, e) => {
	// 	const bgColor = $(e).css("background-color");
	// 	const color = $(e).css("color");
	// 	const display = $(e).css("display");
	// 	if (display !== "none" && color !== bgColor) {
	// 		content += $(e).html();
	// 	}
	// });
	document.querySelectorAll("table tr td").forEach((e) => {
		//console.log('e', e);
		const bgColor = e.style.backgroundColor;
		console.log("bgcolor", bgColor);
		const color = e.style.color;
		console.log("color", color);
		const display = e.style.display;
		if (display !== "none" && color !== bgColor) {
			content += e.innerHTML;
		}
	});
	const table = $("table tr td");
	if (table && table.length) {
	}
	// $("table tr").each(function (index, e) {
	// 	$(e)
	// 		.find("td")
	// 		.each((index, e) => {
	// 			const bgColor = $(e).css("background-color");console.log("bgcolor", bgColor);
	// 			const color = $(e).css("color"); console.log("color", color);
	// 			const display = $(e).css("display");
	// 			if (display !== "none" && color !== bgColor) {
	// 				content += $(e).html();
	// 			}
	// 		});
	// });
	return content;
}

console.log(solution());
