const localStorageKey = 'to-do-list-gn'

function validateIfExistsNewTask() {
	let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
	let inputValue = document.getElementById('todotext').value
	let exists = values.find(x => x.name == inputValue)
	return !exists ? false : true
}

function newTask(){
	let input = document.getElementById('todotext')

	if(!input.value){
		alert('Digite algo para a sua lista')
	}

	else if (validateIfExistsNewTask()) {
		alert('Ja existe essa tarefa')
	}

	else{
		let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
		values.push({
			name: input.value
		})
		localStorage.setItem(localStorageKey, JSON.stringify(values))
		showValues()
	}
}

function showValues() {
	let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
	let list = document.getElementById('todolist')
	list.innerHTML = ''
	for (let i = 0; i < values.length; i++) {
		list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'></button></li>`
	}
}


function removeItem(data) {
	let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
	let index = values.findIndex(x => x.name == data)
	values.splice(index, 1)
	localStorage.setItem(localStorageKey, JSON.stringify(values))
	showValues()
}

showValues()