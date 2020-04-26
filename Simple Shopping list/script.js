var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var deletebtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

//add event listener for 6 btns in HTML
for (var i=0; i < deletebtns.length; i++){
	deletebtns[i].addEventListener("click", removeParent, false);
}


//from stack overflow
function removeParent (evt){
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}
//Click on a list item to straighthrough the text

function getEventTarget(x){
	x = x || window.event;
	return x.target || x.srcElement;
}

ul.onclick = function (event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

//adding new items:

function inputLength() {
	return input.value.length;
}

function createListElement () {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onlclick = removeParent;


	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);


	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick (){
	if (inputLength() > 0 ) {
		createListElement();
	}
}

function addListAfterEnter (event){
	if (inputLength() > 0 && event.which === 13) {
	createListElement();
	}
}


button.addEventListener("click", addListAfterClick); 
input.addEventListener("keypress", addListAfterEnter);


