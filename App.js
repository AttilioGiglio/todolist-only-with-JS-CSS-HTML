// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo")

// Event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(e){
    console.log(e);
    // Prevent form from submitting
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Todo li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Checkbox mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton); 
    // Cross delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    // Append to List
    todoList.appendChild(todoDiv);
    // Clear todo input value
    todoInput.value = ''; 
}

function deleteCheck(e){
    const item = e.target;
    // Delete Todo
    if(item.classList[0] === 'delete-btn'){
        const todo1 = item.parentElement;
        todo1.remove();
    }
    // Cross Todo
    if(item.classList[0] === 'complete-btn'){
        const todo2 = item.parentElement;
        todo2.classList.toggle('completed');
    }
}

function filterTodo(e){
    console.log(e);
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none'
                }
            break;
            // case 'uncompleted':
            //     if(!todo.classList.contains('uncompleted')){
            //         todo.style.display = 'flex';
            //     }
            //     else{
            //         todo.style.display = 'none'
            //     }
        }
    })
}