// To-Do List functionality with localStorage
document.addEventListener('DOMContentLoaded', function() {
    
    // Get DOM elements
    const todoInput = document.getElementById('todo-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const todoListContainer = document.getElementById('todo-list-container');
    
    // Tasks array to store all tasks
    let tasks = [];
    
    // Load tasks from localStorage on page load
    function loadTasks() {
        const savedTasks = localStorage.getItem('todoTasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            console.log('Loaded tasks from localStorage:', tasks);
        }
    }
    
    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
        console.log('Tasks saved to localStorage:', tasks);
    }
    
    // Generate unique ID for each task
    function generateTaskId() {
        return 'task_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    // Create task HTML element
    function createTaskElement(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'todo-item';
        taskDiv.dataset.taskId = task.id;
        
        if (task.completed) {
            taskDiv.classList.add('completed');
        }
        
        taskDiv.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${task.completed ? 'checked' : ''}>
            <span class="todo-text">${task.text}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        return taskDiv;
    }
    
    // Render all tasks
    function renderTasks() {
        todoListContainer.innerHTML = '';
        
        if (tasks.length === 0) {
            todoListContainer.innerHTML = '<p style="text-align: center; padding: 2rem; color: #7f8c8d;">No tasks yet. Add your first task above!</p>';
            return;
        }
        
        tasks.forEach(task => {
            const taskElement = createTaskElement(task);
            todoListContainer.appendChild(taskElement);
        });
        
        console.log('Tasks rendered:', tasks.length, 'tasks');
    }
    
    // Add new task
    function addTask() {
        const taskText = todoInput.value.trim();
        
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        const newTask = {
            id: generateTaskId(),
            text: taskText,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        
        // Clear input field
        todoInput.value = '';
        
        console.log('Task added:', newTask);
    }
    
    // Delete task
    function deleteTask(taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            const deletedTask = tasks.splice(taskIndex, 1)[0];
            saveTasks();
            renderTasks();
            
            console.log('Task deleted:', deletedTask);
        }
    }
    
    // Toggle task completion
    function toggleTask(taskId) {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
            console.log('Task toggled:', task);
        }
    }
    
    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    
    // Allow Enter key to add task
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Event delegation for dynamically created elements
    todoListContainer.addEventListener('click', function(e) {
        const taskItem = e.target.closest('.todo-item');
        if (!taskItem) return;
        
        const taskId = taskItem.dataset.taskId;
        
        if (e.target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this task?')) {
                deleteTask(taskId);
            }
        } else if (e.target.classList.contains('todo-checkbox')) {
            toggleTask(taskId);
        }
    });
    
    // Initialize to-do list
    loadTasks();
    renderTasks();
    
    console.log('To-Do List initialized with localStorage support');
});