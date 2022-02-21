function solution() {
	const isPersonChecked =
		document.getElementById("type_person")?.checked || false;
	const isCompanyChecked =
		document.getElementById("type_company")?.checked || false;
	if (isPersonChecked) {
		return validatePerson();
	}
	if (isCompanyChecked) {
		return validateCompany();
	}
	return false;
}
function validatePerson() {
	const firstName = document.getElementById("first_name")?.value || "";
	const lastName = document.getElementById("last_name")?.value || "";
	return !!firstName && !!lastName && validateEmail();
}
function validateCompany() {
	const companyName = document.getElementById("company_name")?.value || "";
	return companyName && validatePhone();
}
function validateEmail() {
	const email = document.getElementById("email").value;
	return !!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.exec(email);
}
function validatePhone() {
  const phoneNumber = document.getElementById("phone")?.value || "";
  return !!/[d]{3}[\s-]/.exec(phoneNumber)
}
console.log(solution());
