// ============ TO-DO LIST ============

// --- HTML element gula dhoro ---
var input = document.getElementById('todo-input');
var addBtn = document.getElementById('add-task-btn');
var list = document.getElementById('todo-list-container');

var tasks = [];

if (localStorage.getItem('todoTasks')) {
    tasks = JSON.parse(localStorage.getItem('todoTasks'));
}

// --- Screen e tasks dekhao ---
function showTasks() {
    list.innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].hidden) continue; 
        list.innerHTML = list.innerHTML +
            '<div class="todo-item ' + (tasks[i].done ? 'completed' : '') + '">' +
                '<input type="checkbox" class="todo-checkbox" onclick="toggleDone(' + i + ')" ' + (tasks[i].done ? 'checked' : '') + '>' +
                '<span class="todo-text">' + tasks[i].text + '</span>' +
                '<button class="delete-btn" onclick="deleteTask(' + i + ')">Delete</button>' +
            '</div>';
    }
}

function addTask() {
    var text = input.value.trim();
    if (text === '') {
        alert('Please enter a task!');
        return;
    }
    tasks.push({ text: text, done: false });
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
    showTasks();
    input.value = '';
}

function deleteTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
    showTasks();
}

function toggleDone(i) {
    tasks[i].hidden = true;                                   
    localStorage.setItem('todoTasks', JSON.stringify(tasks));  
    showTasks();                                               
}

addBtn.onclick = function() {
    addTask();
};

showTasks();