
function processFormData() {

// Import all elements by ID
	var fname = document.getElementById('fname');
	var lname = document.getElementById('lname');
	var phone_area_code = document.getElementById('phone_area_code');
	var phone_number = document.getElementById('phone_number');
	var mobile_area_code = document.getElementById('mobile_area_code');
	var mobile_number = document.getElementById('mobile_number');
	var email = document.getElementById('email');
	var password = document.getElementById('password');
	var confmpassword = document.getElementById('confmpassword');
	var street_line_1 = document.getElementById('street_line_1');
	var city = document.getElementById('city');
	var country = document.getElementById('country');
	var zipcode = document.getElementById('zipcode');
	var license = document.getElementById('license');
	


	if(checkName(fname, "")){
		if(checkLName(lname, "")){
			if(checkPhoneCode(phone_area_code, "")){
				if(checkPhoneNumber(phone_number, "")){
					if(checkMobileCode(mobile_area_code, "")){
						if(checkMobileNumber(mobile_number, "")){
							if(checkEmail(email, "")){
								if(checkPassword(password, "")){
									//if(checkConfmPassword(confmpassword, "")){
										if(checkAddress(street_line_1, "")){
											if(checkCity(city, "")){
												if(checkCountry(country, "")){		
													if(checkZipcode(zipcode, "")){										
														if(checkLicense(license, "")){
															return true;
														}
													}
												}
											}
										}
									//}
								}
							}
						}
					}
				}
			}
		}
	} 
	
	return false;
}


//First name validation, check for letters in first name field
function checkName(fname){
	var alpha = /^[a-zA-Z]+$/;
	var numeric = /^[0-9]+$/;
	
	if(fname.value.match(alpha) && fname.value.length >=1){
		return true;	
	}
	else if(fname.value.length == 0) {
		alert("First Name: Please enter your first name\n");
		
		fname.focus();
		return false;
	}
	else if(fname.value.match(numeric)){
		alert("First Name field cannot be numeric\n" +"Please enter your first name");
		fname.focus();
		return false;
	}
	else{
		alert("Only Letters please\n" + "Please re-enter a valid first name");
		fname.focus();
		return false;
	}
}

//Last name validation, check for letters in last name field

function checkLName(lname){
	var alpha = /^[a-zA-Z]+$/;
	var numeric = /^[0-9]+$/;
	
	if(lname.value.match(alpha) && lname.value.length >=1){
		return true;	
	}
	else if(lname.value.length == 0) {
		alert("Last Name: Please enter your last name\n");
		
		lname.focus();
		return false;
	}
	else if(lname.value.match(numeric)){
		alert("Last Name field cannot be numeric\n" +"Please re-enter your last name");
		lname.focus();
		return false;
	}
	else{
		alert("Only Letters please\n" + "Please enter a valid last name");
		fname.focus();
		return false;
	}
}


//Phone area code validation, check for number only and 2-digit phone area code in phone area code field

function checkPhoneCode(phone_area_code){
	var code = /^([0])+([0-9])+$/;
	
	if(phone_area_code.value.match(code) && phone_area_code.value.length >=1){
		return true;	
	}
	else if(phone_area_code.value.length == 0) {
		alert("Area Code: Please enter your phone area code\n");
		
		phone_area_code.focus();
		return false;
	}
	else if(!(phone_area_code.value.match(code) && phone_area_code.value.length == 2)){
	  	alert("Area code must be initial with 0 and 2 digit STD\n" + "Please re-enter a valid area code");
		phone_area_code.focus();
		return false;
	}
	else{
		alert("Please enter a valid phone area code");
		phone_area_code.focus();
		return false;
	}
}



//Phone number validation, check for number only and 8-digit local phone numbers in phone number field

function checkPhoneNumber(phone_number){
	var number = /^[0-9]+$/;
	
	if(phone_number.value.match(number) && phone_number.value.length >=1){
		return true;	
	}
	else if(phone_number.value.length == 0) {
		alert("Phone number: Please enter your phone number\n");
		
		phone_number.focus();
		return false;
	}
	else if(!(phone_number.value.match(number) && phone_number.value.length == 8)){
	  	alert("Australia number must be 8-digit local phone numbers\n" + "Please re-enter a valid phone number");
		phone_number.focus();
		return false;
	}
	else{
		alert("Please enter a valid phone number");
		phone_number.focus();
		return false;
	}
}



//Mobile area code validation, check for number only and 2-digit phone area code in phone area code field

function checkMobileCode(mobile_area_code){
	var code = /^([0])+([4])+$/;
	
	if(mobile_area_code.value.match(code) && mobile_area_code.value.length >=1){
		return true;	
	}
	else if(mobile_area_code.value.length == 0) {
		alert("Area Code: Please enter your phone area code\n");
		
		mobile_area_code.focus();
		return false;
	}
	else if(!(mobile_area_code.value.match(code) && mobile_area_code.value.length == 2)){
	  	alert("Area code must be initial with 0 and 4\n" + "Please re-enter a valid area code");
		mobile_area_code.focus();
		return false;
	}
	else{
		alert("Please enter a valid phone area code");
		mobile_area_code.focus();
		return false;
	}
}

//Mobile number validation, check for number only and 8-digit local phone numbers in phone number field

function checkMobileNumber(mobile_number){
	var number = /^[0-9]+$/;
	
	if(mobile_number.value.match(number) && mobile_number.value.length >=1){
		return true;	
	}
	else if(mobile_number.value.length == 0) {
		alert("Mobile Phone number: Please enter your phone number\n");
		
		mobile_number.focus();
		return false;
	}
	else if(!(mobile_number.value.match(number) && mobile_number.value.length == 8)){
	  	alert("Australia number must be 8-digit local phone numbers\n" + "Please re-enter a valid mobile phone number");
		mobile_number.focus();
		return false;
	}
	else{
		alert("Please enter a valid mobile phone number");
		mobile_number.focus();
		return false;
	}
}

//Email validation, check for letters in last name field

function checkEmail(email){
	var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	
	if(email.value.match(pattern) && email.value.length >=1){
		return true;	
	}
	else if(email.value.length == 0) {
		alert("Email: Please enter your email address\n");
		
		email.focus();
		return false;
	}
	else if(!(email.value.match(pattern))){
		alert("Example valid email address: sample@hotmail.com\n" +"Please re-enter a valid email address");
		email.focus();
		return false;
	}
	else{
		alert("Please enter a valid email address");
		email.focus();
		return false;
	}
}

//Password validation, check for letters in last name field

function checkPassword(password){
	
	var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])+/;
	number = /[0-9]/;
	lower = /[a-z]/;
	upper = /[A-Z]/;
	
	if(password.value.match(pass) && password.value.length >=1){
		return true;	
	}
	else if(password.value.length == 0) {
		alert("Password: Please enter password\n");
		password.focus();
		return false;
	}
	else if(password.value.length < 6 || password.value.length > 8 ) {
		alert("Password: Please enter between 6 -8 characters\n ");
		password.focus();
		return false;
	}
	
    else if(!(password.value.match(number))) {
        alert("Error: password must contain at least one number (0-9)!");
        passwrod.focus();
        return false;
      }
    else if(!(password.value.match(lower))) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        password.focus();
        return false;
      }

    else if(!(password.value.match(upper))) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        fpassword.focus();
        return false;
      }
	  
	else if(!(password.value.match(pass))) {
		alert("Password must contain numbers, lowercase and uppercase letters ");
		password.focus();
		return false;
	}
	  
	else{
		alert("Please enter a valid password");
		password.focus();
		return false;
	}
}


//City Validation, check for letters in city field
function checkCity(city){
	var alpha = /^[a-zA-Z]+$/;
	var numeric = /^[0-9]+$/;
	
	if(city.value.match(alpha) && city.value.length >=1){
		return true;	
	}
	else if(city.value.length == 0) {
		alert("City: Please enter your city\n");
		city.focus();
		return false;
	}
	else if(city.value.match(numeric)){
		alert("City field cannot be numeric\n" +"Please re-enter your city");
		city.focus();
		return false;
	}
	else{
		alert("Only Letters please\n" + "Please re-enter a valid city name");
		city.focus();
		return false;
	}
}

//Country Validation, check for letters in country field
function checkCountry(country){
	var alpha = /^[a-zA-Z]+$/;
	var numeric = /^[0-9]+$/;
	
	if(country.value.match(alpha) && country.value.length >=1){
		return true;	
	}
	else if(country.value.length == 0) {
		alert("Country: Please enter your country\n");
		country.focus();
		return false;
	}
	else if(country.value.match(numeric)){
		alert("country field cannot be numeric\n" +"Please re-enter your country");
		country.focus();
		return false;
	}
	else{
		alert("Only Letters please\n" + "Please re-enter a valid country name");
		country.focus();
		return false;
	}
}

//Zipcode validation, check for numberic in postcode field
function checkZipcode(zipcode){
	

	var numeric = /^[0-9]+$/;	
	var alpha = /^[a-zA-Z]+$/;
	
		
	if(zipcode.value.match(numeric) && zipcode.value.length == 4){
		return true;
	}
	
	else if(zipcode.value.match(alpha)){

		alert("Zipcode can by only number\n" + "Please re-enter a zipcode");
		zipcode.focus();
		return false;	
	}

	else if(zipcode.value.match(numeric) && zicpode.value.length < 4){

		alert("Zipcode is 4 digits\n" +"Please re-enter a zipcode");
		zipcode.focus();
		return false;

	}

	else if(zipcode.value.match(numeric) && zipcode.value.length > 4){

		alert("Zipcode is maximum 4 digits\n" +"Please re-enter a zipcode");
		zipcode.focus();
		return false;
	}

	else{

		alert("Invalid zipcode\n" + "Please re-enter a zipcode");
		zipcode.focus();
		return false;
	
	}

}

//License number validation, check for numbers and letters in address field

function checkLicense(license){
  	var lic = /^[A-Za-z0-9]*$/;

	if(license.value.match(lic) && license.value.length >=1){
		return true;	
	}
	else if(license.value.length == 0) {
		alert("License: Please enter your license number\n");
		license.focus();
		return false;
	}
	else if(!(license.value.match(lic))){
	  	alert("License number can be numberic, letters\n" + "Please enter a valid license number");
		license.focus();
		return false;
	}
	else{
		alert("Please enter a valid license number");
		license.focus();
		return false;
	}

}

