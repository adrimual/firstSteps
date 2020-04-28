var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var clearbtn = document.getElementById("clear");

function inputLength (){
	return input.value.length;
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	button.onclick = deleteParent;
}

function addListAfterClick () {
	if (inputLength() > 0) {
		createListElement();
		
	}
}

function addListAfterKeypress (event) {
	if (inputLength() > 0 && event.keyCode===13){
			createListElement();
			
	}
}



ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

function listLength() {
	return listItems.legnth;
}

function deleteParent(event){
	event.target.parentNode.remove();
}

function deleteAll(){
	ul.innerHTML="";
}


clearbtn.addEventListener("click", deleteAll);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);