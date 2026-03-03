// ============ TO-DO LIST ============

// Step 1: HTML load howar por code chalao
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: HTML er element gula dhoro
    var input = document.getElementById('todo-input');        // input box
    var addBtn = document.getElementById('add-task-btn');     // add button
    var list = document.getElementById('todo-list-container'); // jekhane task dekhabe

    // Step 3: LocalStorage theke age save kora tasks load koro
    var tasks = JSON.parse(localStorage.getItem('todoTasks')) || [];

    // Step 4: Screen e tasks dekhano
    function showTasks() {
        list.innerHTML = '';  // age screen muchi

        // kono task na thakle message dekhao
        if (tasks.length === 0) {
            list.innerHTML = '<p style="text-align:center; padding:2rem; color:#7f8c8d;">No tasks yet!</p>';
            return;
        }

        // prottek ta task er jonno HTML banao
        for (var i = 0; i < tasks.length; i++) {

            var div = document.createElement('div');
            div.className = 'todo-item';

            // task complete hole completed class add koro
            if (tasks[i].done) {
                div.className = 'todo-item completed';
            }

            // div er index rakhchi - pore delete/toggle e lagbe
            div.setAttribute('data-index', i);

            // div er bhitor checkbox + text + delete button
            div.innerHTML =
                '<input type="checkbox" class="todo-checkbox" ' + (tasks[i].done ? 'checked' : '') + '>' +
                '<span class="todo-text">' + tasks[i].text + '</span>' +
                '<button class="delete-btn">Delete</button>';

            list.appendChild(div);
        }
    }

    // Step 5: LocalStorage e save koro
    function save() {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }

    // Step 6: Add button e click korle task add hobe
    addBtn.addEventListener('click', function() {
        var text = input.value.trim();  // input box er text nao

        if (text === '') {              // khali hole alert dao
            alert('Please enter a task!');
            return;
        }

        tasks.push({ text: text, done: false });  // array te task rakhcho
        save();       // localStorage e save
        showTasks();  // screen update
        input.value = '';  // input box khali koro
    });

    // Step 7: Enter key diyeo task add kora jay
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();  // enter chaple add button er click fire koro
        }
    });

    // Step 8: Checkbox click = complete/uncomplete, Delete click = muchi
    list.addEventListener('click', function(e) {

        // kothay click hoyeche? - sei task er div khujho
        var taskDiv = e.target.closest('.todo-item');
        if (!taskDiv) return;  // task er upor click na hole kichui korona

        // sei task er index number nao
        var index = Number(taskDiv.getAttribute('data-index'));

        // DELETE button e click?
        if (e.target.classList.contains('delete-btn')) {
            tasks.splice(index, 1);  // array theke sei index er task bair koro
            save();
            showTasks();
        }

        // CHECKBOX e click?
        if (e.target.classList.contains('todo-checkbox')) {
            tasks[index].done = !tasks[index].done;  // true hole false, false hole true
            save();
            showTasks();
        }
    });

    // Step 9: Page load hole tasks dekhao
    showTasks();
});