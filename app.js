document.getElementById('formTask').addEventListener("submit", fuction (), saveTask);

fuction saveTask (e) {
	let title = document.getElementById("title").value;
	let description = document.getElementById('description').value;
		
	const task = {
		title,
		description
	};


	e.preventDefault();
} 