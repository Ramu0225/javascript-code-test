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
	const isPersonChecked = $("#type_person").is(":checked");
	const isCompanyChecked = $("#type_company").is(":checked");
	if (isPersonChecked) {
		return validatePerson();
	}
	if (isCompanyChecked) {
		return validateCompany();
	}
}
function validatePerson() {
	const firstName = $("#first_name").val();
	const lastName = $("#last_name").val();
	return !!firstName && !!lastName && validateEmail();
}
function validatePerson() {
	const companyName = $("#company_name").val();
	return companyName && validatePhone();
}
function validateEmail() {
	const email = $("#email").val();
	return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.exec(email);
}
function validatePhone() {
	const phoneNumber = $("#phone").val();
}
console.log(solution());
