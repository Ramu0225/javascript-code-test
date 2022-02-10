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
	$("table tr").each(function () {
		$(this)
			.find("td")
			.each(function () {
				const bgColor = $(this).css("background-color");
				const color = $(this).css("color");
				const display = $(this).css("display");
				if (display !== "none" && color !== bgColor) {
					content += $(this).html();
				}
			});
	});
	return content;
}
console.log(solution());
