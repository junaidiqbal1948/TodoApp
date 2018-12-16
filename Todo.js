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
// Viewport size
var viewport = window.innerWidth;

// if todos is present in localStorage or not logic

if (window.localStorage.getItem("todos") !== null) {
	var todos = JSON.parse(window.localStorage.getItem("todos"));

	for (let i = todos.length-1; i >= 0; i--) {
		createElm(todos[i], true, "todos");

		icon = document.getElementsByClassName("icon");
		updateEventIcon(true, "todos");

		todo_text = document.getElementsByClassName("todo_text");
		updateEventTodo(true, "todos");
	}

} else {
	var todos = [];
}

// if todosCompleted is present in localStorage or not logic

if (window.localStorage.getItem("todosComp") !== null) {
	var todosComp = JSON.parse(window.localStorage.getItem("todosComp"));

	for (let i = todosComp.length-1; i >= 0; i--) {
		createElm(todosComp[i], true, "todosComp");

		icon = document.getElementsByClassName("icon");
		updateEventIcon(true, "todosComp");

		todo_text = document.getElementsByClassName("todo_text");
		updateEventTodo(true, "todosComp");
	}

} else {
	var todosComp = [];
}





function updateEventTodo(check, str) {
	if (str === "todosComp") {

		document.getElementById('completed').getElementsByClassName('todo_text')[0].addEventListener("click", function(e) {
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
		})

	} else {
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
		})
	}
}

function updateEventIcon(check, str) {

	if (str === "todosComp") {
		// adding event to first icon of todosComp
		document.getElementById('completed').getElementsByClassName('icon')[0].addEventListener("click", function(e) {
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
	} else {
		icon[0].addEventListener("click", function(e) {
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

}



function createElm(b, check, str) { // if program is called from start of program then check is true
	let t; // text node

	if (check === false) {
		todos.unshift(b);
		window.localStorage.setItem('todos', JSON.stringify(todos));
	}

	todos = JSON.parse(window.localStorage.getItem('todos'));
	todosComp = JSON.parse(window.localStorage.getItem('todosComp'));

	let elm = document.createElement("DIV");
	elm.classList.add("todo");

	let span = document.createElement("SPAN");
	span.classList.add("todo_text");
	if (check === false) {
		t = document.createTextNode(todos[0]); // first todo in todo array

	} else {  // for both todos and todosComp same values
		t = document.createTextNode(b); // first todo in array
	}
	// Create a text node
	span.appendChild(t);

	let iconi = document.createElement("I");
	iconi.classList.add("fas");
	iconi.classList.add("fa-times");
	iconi.classList.add("icon");


	if (str === "todosComp") {
		span.style.textDecoration = "line-through";
	}

	span.style.maxWidth = String(viewport-90).concat("px"); // max width set to viewport

	elm.appendChild(span);
	elm.appendChild(iconi);


	if (str === "todosComp") {
		completed.insertBefore(elm, completed.firstChild);
	} else {
		todo_wrap.insertBefore(elm, todo_wrap.firstChild);
	}
}

// runs when Enter key pressed
input.addEventListener("keydown", function(e){
	if (e.keyCode === 13) {

		let b;

		if (input.value === "") {
			input.focus();
		} else {
			b = input.value;

			createElm(b, false, "todos");

			icon = document.getElementsByClassName("icon");
			updateEventIcon(false, "todos");

			todo_text = document.getElementsByClassName("todo_text");
			updateEventTodo(false, "todos");

			input.value = "";
			input.focus();
		}
	}
});

// for Mobile
document.getElementsByClassName("add-icon")[0].addEventListener("click", function() {
	let b;

	if (input.value === "") {
		input.focus();
	} else {
		b = input.value;

		createElm(b, false, "todos");

		icon = document.getElementsByClassName("icon");
		updateEventIcon(false, "todos");

		todo_text = document.getElementsByClassName("todo_text");
		updateEventTodo(false, "todos");

		input.value = "";
		input.focus();
	}


});
