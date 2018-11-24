// Event added to closing icon(@)
var icon = document.getElementsByClassName("icon");
// input element
var input = document.getElementById("input");
// parent todo-wrap element
var todo_wrap = document.getElementById("todo_wrap");
// todos spans inside todo-wrap
var todo_text = document.getElementsByClassName("todo_text");
// div completed
var completed = document.getElementById('completed');

// initial for loop to add event listeners to span elements of todos
for (var i = todo_text.length - 1; i >= 0; i--) {
			todo_text[i].addEventListener("click", function(e){
			if (e.currentTarget.style.textDecoration === "line-through") {
				e.currentTarget.style.textDecoration = "none";
				todo_wrap.appendChild(e.currentTarget.parentNode);
			}else{
				e.currentTarget.style.textDecoration = "line-through";
				completed.appendChild(e.currentTarget.parentNode);
			}})
}

function updateEventTodo() {
			if (document.querySelectorAll("#completed .todo").length>0)
			{
				todo_text[todo_text.length-(document.querySelectorAll("#completed .todo").length+1)].addEventListener("click", function(e){
					if (e.currentTarget.style.textDecoration === "line-through") {
						e.currentTarget.style.textDecoration = "none";
						todo_wrap.appendChild(e.currentTarget.parentNode);
						console.log("hey");
					}else{
						e.currentTarget.style.textDecoration = "line-through";
						completed.appendChild(e.currentTarget.parentNode);
					} console.log(todo_text)})
			} else {
					todo_text[todo_text.length-1].addEventListener("click", function(e){if (e.currentTarget.style.textDecoration === "line-through") {
					e.currentTarget.style.textDecoration = "none";
					todo_wrap.appendChild(e.currentTarget.parentNode);
					console.log("hey");
			} else {
				e.currentTarget.style.textDecoration = "line-through";
				completed.appendChild(e.currentTarget.parentNode);
			}console.log(todo_text)})
		}
}

// initial for loop to add event listeners to icon elements of todos
for (var i = icon.length - 1; i >= 0; i--) {
	 icon[i].addEventListener("click", function(e){e.currentTarget.parentNode.remove();})
}

function updateEvent() {
	if (document.querySelectorAll("#completed .todo").length>0) {
		icon[todo_text.length-(document.querySelectorAll("#completed .todo").length+1)].addEventListener("click", function(e){e.currentTarget.parentNode.remove();})
	} else {
		icon[icon.length-1].addEventListener("click", function(e){e.currentTarget.parentNode.remove();})
	}

}




// add todo
var adder = document.getElementsByClassName("add-icon");

adder[0].addEventListener("click", function(){
	let b = input.value;

	let elm = document.createElement("DIV");
	elm.classList.add("todo");

	let span = document.createElement("SPAN");
	span.classList.add("todo_text");
	var t = document.createTextNode(b);
	// Create a text node
    span.appendChild(t);

	let iconi = document.createElement("I");
	iconi.classList.add("icon");
	t = document.createTextNode("@");
	// Create a text node
    iconi.appendChild(t);

	elm.appendChild(span);
	elm.appendChild(iconi);

	todo_wrap.appendChild(elm);

	icon = document.getElementsByClassName("icon");
	updateEvent();

	todo_text = document.getElementsByClassName("todo_text");
	updateEventTodo();

	input.value = "";
	console.log(todo_text)
});




// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// input
var inputEdit = document.getElementById("edit");
var glb; //temporary for editing

function runHere(sibling, e) {
	e.currentTarget.previousElementSibling.innerHTML = inputEdit.value;
}

// When the user clicks on the button, open the modal
btn.onclick = function(e) {
    modal.style.display = "block";
		var sibling = e.currentTarget.previousElementSibling;
		console.log(sibling);
		runHere(sibling, e);
		glb = e;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
		glb.currentTarget.previousElementSibling.innerHTML = inputEdit.value;
    modal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
