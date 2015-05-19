// JavaScript Document

//Function to calculate carpet
function calccost() {
	var length=document.getElementById("length").value;
	var width=document.getElementById("width").value;
	var cost=document.getElementById("sqft").value;
	var room=document.getElementById("room");
	var room=room.options[room.selectedIndex].text;
	var total=(length*width) + (0.25*(length*width));
	

	alert("Total cost: $" + total.toFixed(2) + '\n' + "Total sq ft: " + length*width + '\n' + "Room: " + room);
	
}
