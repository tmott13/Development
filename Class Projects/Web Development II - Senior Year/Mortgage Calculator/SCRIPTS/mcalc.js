function doClear() {
	document.mortcalc.principal.value = "";
	document.mortcalc.year.value = "";
	document.mortcalc.term.value = "";
	document.mortcalc.payments.value = "";
	
	return;
}


function Validate() {
	
	var principal =document.getElementById("principal").value;
	var year =document.getElementById("year").value;
	var term = document.getElementById("term").value;

	
	
	if (isNaN(principal)) {
		return false;
	}
	
	if (principal.length==0) {
		return false;
	}
	
	if (isNaN(year)) {
		return false;
	}
	
	if (year.length==0) {
		return false;
	}
	
	if (isNaN(term)) {
		
		return false;
	}
	
	if (term.length==0) {
		
		return false;
	}

	

	return true;
		
}

function doCalculate() {

	if (Validate() == false) {
		alert("Required data missing");
		return;
	}

var principal = document.getElementById("principal").value;
	var percentage = document.getElementById("year").value;
	var loanterm = Math.round(document.getElementById("term").value);
	var interest = (percentage / 1200) ;
	var payments = principal * interest/(1-(1/Math.pow((1 + interest),loanterm))) ;
	var roundpayments = Math.round(payments*100)/100;
	
	var sum = Math.round(payments * loanterm * 100)/100;
	var total = Math.round((sum - principal)*100)/100;
	
	document.getElementById("term").value = loanterm;
	document.getElementById("payments").innerHTML = roundpayments;
	document.getElementById("sum").innerHTML = sum;
	document.getElementById("total").innerHTML = total;
	
}