let todoList = JSON.parse(localStorage.getItem('todoList'));

if(!todoList){
    todoList = [{
        name: 'todoList',
        time: 'time'
    }];
}

function saveStorage(){
localStorage.setItem('todoList', JSON.stringify(todoList));
}

const btn = document.querySelector('.addbtn');
const result = document.querySelector('.result');

    renderx();

    function renderx(){
        
        let todoListHtml = '';

        todoList.forEach((todo) => {
            html =
            `
            <div class="res todolist-container-${todo.name}">
            <div class="todojs">${todo.name}</div> 
            <div class="timejs">${todo.time}</div>
            <button class="dlt_btn" data-todolist-delete="${todo.name}">Delete</button>
            </div>
            `



            

            todoListHtml += html;
            
        
        result.innerHTML = todoListHtml;

        });

        function removeTodo(todoId){
            let newTodo = [];
        
            todoList.forEach((todo) => {
            if(todo.name !== todoId){
                newTodo.push(todo);
            };
            todoList = newTodo;
            });
            saveStorage();
        }

        document.querySelectorAll('.dlt_btn')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const todoId = link.dataset.todolistDelete;


            removeTodo(todoId);
                

                
            
           const container = document.querySelector(`.todolist-container-${todoId}`);

           container.remove();

        
            
        });
        
    });

            
    
            
    
    }

    const error = document.querySelector('.error');

function addTodo(){

    const inp = document.querySelector('.input_js');
    const inputVal = inp.value;
    const time = document.querySelector('.time_js');
    const timeVal = time.value;

    if(inp.value === ''){
        
        error.addEventListener('click', error);
            error.style.display = 'flex';
            

        return;
    }else{
        todoList.push({name: inputVal, time: timeVal});
        
    }

    saveStorage();

    inp.value = '';
    time.value = '';
    renderx();
    
}

btn.addEventListener('click', addTodo);
const back = document.querySelector('.back');

function backx(){
error.style.display = 'none'
}

console.log(todoList)

