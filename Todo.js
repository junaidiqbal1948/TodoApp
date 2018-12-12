// Event adder for closing icon(@)
var icon = document.getElementsByClassName("icon");
// input element
var input = document.getElementById("input");
// parent todo-wrap element
var todo_wrap = document.getElementById("todo_wrap");
// todos spans inside todo-wrap
var todo_text = document.getElementsByClassName("todo_text");
// todos spans inside todo-complete
var todosComp_text = document.getElementsByClassName("todosComp_text");
// completed div
var completed = document.getElementById('completed');
// temporary len variable
var tempLen;

// if todos is present in localStorage or not logic

if (window.localStorage.getItem("todos") !== null) {
	var todos = JSON.parse(window.localStorage.getItem("todos"));

	for (var i = todos.length-1; i >= 0; i--) {
		createElm(todos[i], true);

		icon = document.getElementsByClassName("icon");
		updateEventIcon();

		todo_text = document.getElementsByClassName("todo_text");
		updateEventTodo();
	}

} else {
	var todos = [];
}

// if todosCompleted is present in localStorage or not logic

if (window.localStorage.getItem("todosComp") !== null) {
	var todosComp = JSON.parse(window.localStorage.getItem("todosComp"));

	console.log(todosComp);

	for (var i = 0; i < todosComp.length; i++) {
		createElmStartComp(todosComp[i]);

		icon = document.getElementsByClassName("icon");
		updateEventIconStart();

		todo_text = document.getElementsByClassName("todo_text");
		updateEventTodoStart();
	}

} else {
	var todosComp = [];
}




function updateEventTodoStart() {
	if (document.querySelectorAll("#completed .todo").length>0) {
		tempLen = document.querySelectorAll("#completed .todo").length-1;
	} else {
		tempLen = 0;
	}
	todo_text[tempLen].addEventListener("click", function(e) {
		if (e.currentTarget.style.textDecoration === "line-through") {
			e.currentTarget.style.textDecoration = "none";
			todo_wrap.appendChild(e.currentTarget.parentNode);

			todos.unshift(e.currentTarget.innerHTML);
			// remove item from todosComp
			for (var i = 0; i < todosComp.length; i++) {
				if (e.currentTarget.innerHTML === todosComp[i]) {
					todosComp.splice(i, /*deleteCount*/ 1);
					break;
				}
			}

			// update storage browser
			window.localStorage.setItem('todosComp', JSON.stringify(todosComp));
			window.localStorage.setItem('todos', JSON.stringify(todos));

		} else {
			e.currentTarget.style.textDecoration = "line-through";
			completed.appendChild(e.currentTarget.parentNode);

			console.log(e.currentTarget.innerHTML);

			let elmCheck = false;
			for (var i = 0; i < todosComp.length; i++) {
				if (e.currentTarget.innerHTML === todosComp[i]) {
					elmCheck = true;
					break;
				}
			}

			if (elmCheck === false) {
				todosComp.unshift(e.currentTarget.innerHTML);

				// NOTE: remove item from todos

				for (var i = 0; i < todos.length; i++) {
					if (todos[i] === e.currentTarget.innerHTML) {
						todos.splice(i,/*deleteCount*/ 1);

					}
				}

			}

			window.localStorage.setItem('todosComp', JSON.stringify(todosComp));
			window.localStorage.setItem('todos', JSON.stringify(todos));


			// NOTE: When app loads completed todos should be in complete and others left are in todos

		}
	});
}




function updateEventTodo() {
	// if (document.querySelectorAll("#completed .todo").length>0) {
	// 	tempLen = todo_text.length-(document.querySelectorAll("#completed .todo").length+1);
	// } else {
	// 	tempLen = todo_text.length-1;
	// }
	todo_text[0].addEventListener("click", function(e) {
		if (e.currentTarget.style.textDecoration === "line-through") {
			e.currentTarget.style.textDecoration = "none";
			// todo_wrap.appendChild(e.currentTarget.parentNode);

			todo_wrap.insertBefore(e.currentTarget.parentNode, todo_wrap.firstChild);

			todos.unshift(e.currentTarget.innerHTML);
			// remove item from todosComp
			for (var i = 0; i < todosComp.length; i++) {
				if (e.currentTarget.innerHTML === todosComp[i]) {
					todosComp.splice(i, /*deleteCount*/ 1);
					break;
				}
			}

			// update storage browser
			window.localStorage.setItem('todosComp', JSON.stringify(todosComp));
			window.localStorage.setItem('todos', JSON.stringify(todos));

		} else {
			e.currentTarget.style.textDecoration = "line-through";
			completed.insertBefore(e.currentTarget.parentNode, completed.firstChild);
			console.log(e.currentTarget.innerHTML);

			let elmCheck = false;
			for (var i = 0; i < todosComp.length; i++) {
				if (e.currentTarget.innerHTML === todosComp[i]) {
					elmCheck = true;
					break;
				}
			}

			if (elmCheck === false) {
				todosComp.unshift(e.currentTarget.innerHTML);

				// NOTE: remove item from todos

				for (var i = 0; i < todos.length; i++) {
					if (todos[i] === e.currentTarget.innerHTML) {
						todos.splice(i,/*deleteCount*/ 1);

					}
				}

			}

			window.localStorage.setItem('todosComp', JSON.stringify(todosComp));
			window.localStorage.setItem('todos', JSON.stringify(todos));


			// NOTE: When app loads completed todos should be in complete and others left are in todos

		}
	});
}

function updateEventIcon() {
	// if (document.querySelectorAll("#completed .todo").length>0) {
	// 	// some todo completed
	// 	tempLen = todo_text.length-(document.querySelectorAll("#completed .todo").length+1);
	// } else {
	// 	// todo not completed any of yet
	// 	tempLen = icon.length-1;
	// }
	console.log(tempLen);
	console.log(icon);

	icon[0].addEventListener("click", function(e){
		e.currentTarget.parentNode.remove();


		let remove = e.currentTarget.previousSibling.innerHTML;
		let start;

		for (var i = 0; i < todos.length; i++) {
			if (todos[i] === remove) {
				start = i;
				todos.splice(start,/*deleteCount*/ 1);
			}
		}

		for (var i = 0; i < todosComp.length; i++) {
			if (todosComp[i] === remove) {
				start = i;
				todosComp.splice(start,/*deleteCount*/ 1);
			}
		}

		// todos.splice(start,/*deleteCount*/ 1);
		window.localStorage.setItem('todos', JSON.stringify(todos));
		window.localStorage.setItem('todosComp', JSON.stringify(todosComp));
	})
}


function updateEventIconStart() {
	if (document.querySelectorAll("#completed .todo").length>0) {
		// some todo completed
		tempLen = document.querySelectorAll("#completed .todo").length-1;
		console.log(document.querySelectorAll("#completed .todo").length);
		// tempLen = 0;
	} else {
		// todo not completed any of yet
		tempLen = 0;
	}
	console.log(tempLen);
	console.log(icon);

	icon[tempLen].addEventListener("click", function(e){
		e.currentTarget.parentNode.remove();


		let remove = e.currentTarget.previousSibling.innerHTML;
		let start;

		for (var i = 0; i < todos.length; i++) {
			if (todos[i] === remove) {
				start = i;
				todos.splice(start,/*deleteCount*/ 1);
			}
		}

		for (var i = 0; i < todosComp.length; i++) {
			if (todosComp[i] === remove) {
				start = i;
				todosComp.splice(start,/*deleteCount*/ 1);
			}
		}

		// todos.splice(start,/*deleteCount*/ 1);
		window.localStorage.setItem('todos', JSON.stringify(todos));
		window.localStorage.setItem('todosComp', JSON.stringify(todosComp));
	})
}

function createElmStart(b) {

	let elm = document.createElement("DIV");
	elm.classList.add("todo");

	let span = document.createElement("SPAN");
	span.classList.add("todo_text");
	// Create a text node
	let t = document.createTextNode(b); // todo in array
	span.appendChild(t);

	let iconi = document.createElement("I");
	iconi.classList.add("fas");
	iconi.classList.add("fa-times");
	iconi.classList.add("icon");

	elm.appendChild(span);
	elm.appendChild(iconi);

	todo_wrap.appendChild(elm);
}

function createElmStartComp(b) {

	let elm = document.createElement("DIV");
	elm.classList.add("todo");

	let span = document.createElement("SPAN");
	span.classList.add("todo_text");
	let t = document.createTextNode(b); // last todo in array
	// Create a text node
	span.appendChild(t);
	span.style.textDecoration = "line-through";

	let iconi = document.createElement("I");
	iconi.classList.add("fas");
	iconi.classList.add("fa-times");
	iconi.classList.add("icon");

	elm.appendChild(span);
	elm.appendChild(iconi);

	completed.appendChild(elm);
}


function createElm(b, check) { // if program is called from start of program then check is true

	if (check === false) {
		todos.unshift(b);
		window.localStorage.setItem('todos', JSON.stringify(todos));
	}

	let elm = document.createElement("DIV");
	elm.classList.add("todo");

	let span = document.createElement("SPAN");
	span.classList.add("todo_text");
	if (check === false) {
		let t = document.createTextNode(todos[0]); // first todo in array
	} else {
		let t = document.createTextNode(b); // first todo in array
	}
	// Create a text node
	span.appendChild(t);

	let iconi = document.createElement("I");
	iconi.classList.add("fas");
	iconi.classList.add("fa-times");
	iconi.classList.add("icon");

	elm.appendChild(span);
	elm.appendChild(iconi);

	todo_wrap.insertBefore(elm, todo_wrap.firstChild);
}

// runs when Enter key pressed
input.addEventListener("keydown", function(e){
	if (e.keyCode === 13) {

		let b = input.value;

		createElm(b, false); // called within running state so False

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

	createElm(b, false);

	icon = document.getElementsByClassName("icon");
	updateEventIcon();

	todo_text = document.getElementsByClassName("todo_text");
	updateEventTodo();

	input.value = "";
});
