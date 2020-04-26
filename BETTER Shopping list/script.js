// var button = document.getElementById("enter");
// var input = document.getElementById("userInput");
// var ul = document.querySelector("ul");
// var deletebtns = document.getElementsByClassName("delete");
// var items = ul.getElementsByTagName("li");

// //add event listener for 6 btns in HTML
// for (var i=0; i < deletebtns.length; i++){
// 	deletebtns[i].addEventListener("click", removeParent, false);
// }


// //from stack overflow
// function removeParent (evt){
// 	evt.target.removeEventListener("click", removeParent, false);
// 	evt.target.parentNode.remove();
// }
// //Click on a list item to straighthrough the text

// function getEventTarget(x){
// 	x = x || window.event;
// 	return x.target || x.srcElement;
// }

// ul.onclick = function (event){
// 	var target = getEventTarget(event);
// 	target.classList.toggle("done");
// }

// //adding new items:

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement () {
// 	var btn = document.createElement("button");
// 	btn.innerHTML = "Delete";
	


// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	li.innerHTML = li.innerHTML + " ";
// 	li.appendChild(btn);


// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick (){
// 	if (inputLength() > 0 ) {
// 		createListElement();
// 	}
// }

// function addListAfterEnter (event){
// 	if (inputLength() > 0 && event.which === 13) {
// 	createListElement();
// 	}
// }


// button.addEventListener("click", addListAfterClick); 
// input.addEventListener("keypress", addListAfterEnter);

// var button = document.getElementById("enter");
// var input = document.getElementById("userInput");
// const ul = document.querySelector("ul");
// const li = document.getElementsByTagName("li");
// const deleteButton = document.getElementsByTagName("i");
// var clearButton = document.getElementById("clear");

// function strikeThrough(e){
// 	if (e.target.tagName === "LI"){
// 		e.target.classList.toggle("done");
// 	}
// }

// function createDeleteButtonIcon() {
// 	for (var ind = 0; ind < li.length; ind++){
// 		var createDeleteButton = document.createElement("i"); //creates an element "i", that will be the delete button
// 		var createDiv = document.getElementsByClassName("div"); //creates a "div" so we can add our button
// 		console.log(createDiv);
// 		createDeleteButton.classList.add("fa", "fa-trash"); //adds a css class property to deleteButton
// 		createDiv[ind].appendChild(createDeleteButton); //in position "ind" adds a delete button
// 	}
// }

// function deleteNodeOnClick(e){
// 	var trash = document.querySelectorAll("i");// we asign var "trash" to the list of delete buttons
// 	for(var ind = 0; ind < trash.length; ind++){ //this goes through all the delete buttons
// 		console.log(e);
// 		this.parentNode.parentNode.remove(); //deletes the current selected parent's node (div)
// 	}
// }

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement(){
// 	var divClassWrapper = document.createElement("div"); //creates a div to wrap added list elements
// 	divClassWrapper.classList.add("li-wrapper");

// 	var li = document.createElement("li"); //we create a "li" element in a var li
// 	var createDiv = document.createElement("div");//we create a "div" in a var called createDiv

// 	li.appendChild(document.createTextNode(input.value)); //we add a textNode in "li" with the value we put
// 	divClassWrapper.appendChild(li);//we add the list element we wrotte
// 	divClassWrapper.appendChild(createDiv);//we add the div created that wraps the li
// 	ul.appendChild(divClassWrapper); //adds the big wrapper that contains "createDiv" and "li"

// 	input.value="";//resets the input.value to empty
// 	createDiv.classList.add("div"); 
// 	var createDeleteButton = document.createElement ("i");
// 	createDeleteButton.classList.add ("fa", "fa-trash");
// 	createDiv.appendChild(createDeleteButton);//adds the delete button to the div
// 	deleteParentNodeOnClick(); //runs function
// }

// function addListAfterClick(){
// 	if (inputLength() > 0){
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event){
// 	if(inputLength() > 0 && event.which === 13) {
// 		createListElement();
// 	}
// }

// function deleteParentNodeOnClick() {
// 	for (var i = 0; i < deleteButton.length; i++) {
// 		deleteButton[i].addEventListener("click", deleteNodeOnClick);
// 	}
// }

// function clearList() {
// 	ul.innerHTML="";
// }

// clearButton.addEventListener("click", clearList);
// ul.addEventListener ("click", strikeThrough);
// button.addEventListener("click", addListAfterClick);
// input.addEventListener ("keypress", addListAfterClick);
// createDeleteButtonIcon();
// deleteParentNodeOnClick();

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByTagName("i");
var clearButton = document.getElementById("clear");

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function createDeleteButtonIcon() {
    for (var ind = 0; ind < li.length; ind++) {
        var createDeleteButton = document.createElement("i");
        var createDiv = document.getElementsByClassName("div");
        console.log(createDiv);
        createDeleteButton.classList.add("fa", "fa-trash");
        createDiv[ind].appendChild(createDeleteButton);
    }
}

function deleteNodeOnClick(e) {
    var trash = document.querySelectorAll("i");
    for (var ind = 0; ind < trash.length; ind++) {
        console.log(e);
        this.parentNode.parentNode.remove();
    }
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var divClassWrapper = document.createElement("div");
    divClassWrapper.classList.add("li-wrapper");

    var li = document.createElement("li");
    var createDiv = document.createElement("div");

    li.appendChild(document.createTextNode(input.value));
    divClassWrapper.appendChild(li);
    divClassWrapper.appendChild(createDiv);
    ul.appendChild(divClassWrapper);

    input.value = "";
    createDiv.classList.add("div");
    var createDeleteButton = document.createElement("i");
    createDeleteButton.classList.add("fa", "fa-trash");
    createDiv.appendChild(createDeleteButton);
    deleteParentNodeOnClick();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteParentNodeOnClick() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}

function clearList() {
    ul.innerHTML = "";
}

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
createDeleteButtonIcon();
deleteParentNodeOnClick();