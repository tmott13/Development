// JavaScript Document

function doClear () {
	document.pizza.name.value = "";
	document.pizza.address.value = "";
	document.pizza.city.value = "";
	document.pizza.state.value = "";
	document.pizza.zip.value = "";
	document.pizza.phone.value = "";
	
	document.pizza.Sizes[0].checked = false;
	document.pizza.Sizes[1].checked = false;
	document.pizza.Sizes[2].checked = false;
	
	document.pizza.Toppings[0].checked = false;
	document.pizza.Toppings[1].checked = false;
	document.pizza.Toppings[2].checked = false;
	document.pizza.Toppings[3].checked = false;
	document.pizza.Toppings[4].checked = false;
	document.pizza.Toppings[5].checked = false;

	return;
}

function doSubmit() {
	
	if (validateText() == false) {
		alert("Required data missing in Step 1");
		return;
	}
	
	if (validateRadio() == false) {
		alert("Required data missing in Step 2");
		return;
	}
	
	alert("Your pizza order has been submitted.");
	return;
	
}

function validateText () {
	var name = document.pizza.name.value;
	if (name.length == 0) return false;
	
	var address = document.pizza.address.value;
	if (address.length == 0) return false;
	
	var city = document.pizza.city.value;
	if (city.length == 0) return false;
	
	var state = document.pizza.state.value;
	if (state.length == 0) return false;
	
	var zip = document.pizza.zip.value;
	if (zip.length == 0) return false;
	
	var phone = document.pizza.phone.value;
	if (phone.length == 0) return false;
	
	return true;
}

function validateRadio() {
	
	if (document.pizza.Sizes[0].checked) return true;
	if (document.pizza.Sizes[1].checked) return true;
	if (document.pizza.Sizes[2].checked) return true;
	
	return false;
}

