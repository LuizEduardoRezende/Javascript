const task = document.getElementById('task-input');
const taskList = document.getElementById('tasks');
const taskForm = document.getElementById('task-form');

taskForm.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(){
    const taskDiv = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', task.value);

    label.setAttribute('for', task.value);
    label.innerHTML = task.value;

    taskDiv.appendChild(input);
    taskDiv.appendChild(label);
    taskList.appendChild(taskDiv);

    task.value = "";  // Limpar o campo de entrada após adicionar a tarefa
}
