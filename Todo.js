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
// temporary len variable
var tempLen;


function updateEventTodo() {
	if (document.querySelectorAll("#completed .todo").length>0) {
		tempLen = todo_text.length-(document.querySelectorAll("#completed .todo").length+1);
	} else {
		tempLen = todo_text.length-1;
	}
	todo_text[tempLen].addEventListener("click", function(e) {
		if (e.currentTarget.style.textDecoration === "line-through") {
			e.currentTarget.style.textDecoration = "none";
			todo_wrap.appendChild(e.currentTarget.parentNode);
		} else {
			e.currentTarget.style.textDecoration = "line-through";
			completed.appendChild(e.currentTarget.parentNode);
		}
	});
}

function updateEventIcon() {
	if (document.querySelectorAll("#completed .todo").length>0) {
		// some todo completed
		tempLen = todo_text.length-(document.querySelectorAll("#completed .todo").length+1);
	} else {
		// todo not completed any of yet
		tempLen = icon.length-1;
	}
	icon[tempLen].addEventListener("click", function(e){e.currentTarget.parentNode.remove();})
}

function createElm(b) {
	let elm = document.createElement("DIV");
	elm.classList.add("todo");

	let span = document.createElement("SPAN");
	span.classList.add("todo_text");
	let t = document.createTextNode(b);
	// Create a text node
	span.appendChild(t);

	let iconi = document.createElement("I");
	iconi.classList.add("fas");
	iconi.classList.add("fa-times");
	iconi.classList.add("icon");

	elm.appendChild(span);
	elm.appendChild(iconi);

	todo_wrap.appendChild(elm);
}

// runs when Enter key pressed
input.addEventListener("keydown", function(e){
	if (e.keyCode === 13) {
		let b = input.value;

		createElm(b);

		icon = document.getElementsByClassName("icon");
		updateEventIcon();

		todo_text = document.getElementsByClassName("todo_text");
		updateEventTodo();

		input.value = "";
	}
});

// for Mobile
document.getElementsByClassName("add-icon")[0].addEventListener("click", function() {
	let b = input.value;

	createElm(b);

	icon = document.getElementsByClassName("icon");
	updateEventIcon();

	todo_text = document.getElementsByClassName("todo_text");
	updateEventTodo();

	input.value = "";
});
