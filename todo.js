// ============ TO-DO LIST ============

// --- HTML element gula dhoro ---
var input = document.getElementById('todo-input');
var addBtn = document.getElementById('add-task-btn');
var list = document.getElementById('todo-list-container');

// --- Task gula rakhbar array ---
var tasks = [];

// --- Page load hole localStorage theke tasks ano ---
if (localStorage.getItem('todoTasks')) {
    tasks = JSON.parse(localStorage.getItem('todoTasks'));
}

// --- Screen e tasks dekhao ---
function showTasks() {
    list.innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {
        list.innerHTML = list.innerHTML +
            '<div class="todo-item ' + (tasks[i].done ? 'completed' : '') + '">' +
                '<input type="checkbox" class="todo-checkbox" onclick="toggleDone(' + i + ')" ' + (tasks[i].done ? 'checked' : '') + '>' +
                '<span class="todo-text">' + tasks[i].text + '</span>' +
                '<button class="delete-btn" onclick="deleteTask(' + i + ')">Delete</button>' +
            '</div>';
    }
}

// --- Task add koro ---
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

// --- Task delete koro ---
function deleteTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
    showTasks();
}

function toggleDone(i) {
    var item = document.getElementsByClassName('todo-item');
    item[i].style.display = 'none';
}

// --- Add button click ---
addBtn.onclick = function() {
    addTask();
};

// --- Shuru te tasks dekhao ---
showTasks();