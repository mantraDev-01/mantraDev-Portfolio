const todoList = [{
    name: 'What To-Do?',
    time: 'What Time?'
}];

const btn = document.querySelector('.addbtn');
const res = document.querySelector('.res');

    renderx();

    function renderx(){
        
        let todoListHtml = '';

        todoList.forEach(function(todoObject, index){

            const todox = todoObject.name;
            const timex = todoObject.time;
            html =
            `<div class="todojs">${todox}</div> <div class="timejs">${timex}</div>
            <button class="dlt_btn" onclick="todoList.splice(${index}, 1); renderx();">Delete</button>`

            

            todoListHtml += html;
            
        })
        res.innerHTML = todoListHtml;
    
            
    
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

    

    inp.value = '';
    time.value = '';
    renderx();
}

btn.addEventListener('click', addTodo);
const back = document.querySelector('.back');

function backx(){
error.style.display = 'none'
}
    

