// Theme switcher
var switcher = document.getElementById('switch_theme');

function darkTheme() {
	switcher.checked = true;
	localStorage.setItem('switch', 'on');
	document.body.setAttribute('theme', 'dark');	
}

function lightTheme() {
	switcher.checked = false;
	localStorage.setItem('switch', 'off');
	document.body.removeAttribute('theme');	
}

switcher.onclick = function() {
	if (switcher.checked) {
		darkTheme();
	} else {
		lightTheme();
	}
}

if (localStorage.getItem('switch') == 'on') {
	darkTheme();
}

// Remember to-do list checkbox value
var chbTodo = document.getElementById('switch_todo');

chbTodo.onclick = function() {
	if (chbTodo.checked) {
		localStorage.setItem('switch_todo', 'true');
		document.getElementById('switch_weather').checked = false;
		localStorage.setItem('switch_weather', 'false');
	} else {
		localStorage.setItem('switch_todo', 'false');
	}
}

if (localStorage.getItem('switch_todo') == 'true') {
	chbTodo.setAttribute('checked','checked');
}
