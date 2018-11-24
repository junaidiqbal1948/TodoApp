// Event added to closing icon
var icon = document.getElementsByClassName("icon");
// input
var input = document.getElementById("input");
// parent todo-wrap element
var todo_wrap = document.getElementById("todo_wrap");
// todos
var todo_text = document.getElementsByClassName("todo_text");

for (var i = todo_text.length - 1; i >= 0; i--) {
	todo_text[i].addEventListener("click", function(e){if (e.currentTarget.style.textDecoration === "line-through") {
		e.currentTarget.style.textDecoration = "none";
	}else{
		e.currentTarget.style.textDecoration = "line-through";
	}})
}

function updateEventTodo() {
	for (var i = 0; i < 1; i++) {
	todo_text[todo_text.length-1].addEventListener("click", function(e){if (e.currentTarget.style.textDecoration === "line-through") {
		e.currentTarget.style.textDecoration = "none";
	}else{
		e.currentTarget.style.textDecoration = "line-through";
	}})
}
}


for (var i = icon.length - 1; i >= 0; i--) {
	// icon[i].addEventListener("click", function(){ alert("Hello World!"); });
	 icon[i].addEventListener("click", function(e){e.currentTarget.parentNode.remove();})
}

function updateEvent() {
	for (var i = 0; i < 1; i++) {
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
	updateEvent();

	todo_text = document.getElementsByClassName("todo_text");
	updateEventTodo();

	input.value = "";

});

// <div class="todo">
// 				<span class="todo-text">Carry Chochs</span>
// 				<i class="icon">@</i>
// 			</div>