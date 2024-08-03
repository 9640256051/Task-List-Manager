document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(text) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${text}</span>
        <div>
            <button onclick="toggleComplete(this)">Complete</button>
            <button class="remove" onclick="removeTask(this)">Remove</button>
        </div>
    `;
    
    taskList.appendChild(li);
}

function toggleComplete(button) {
    const li = button.parentElement.parentElement;
    li.querySelector('span').classList.toggle('completed');
}

function removeTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
