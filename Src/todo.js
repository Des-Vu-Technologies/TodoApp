
const TodoList = [];

function renderTodo(){
    let totalList = '';
    for(i=0; i<TodoList.length; i++){
        const todoObj = TodoList[i];
        // const name = todo.name;
        // const dueDate = todo.dueDate;

        // const {name} = todo;
        // const {dueDate} = todo;
        const {name, dueDate} = todoObj;

        const html = `<div class="todo-grid"><div>${name} </div><div>${dueDate}</div>
        
        <button class="deltBtn" onclick="

        TodoList.splice(${i},1); renderTodo();

        ">Delete</button></div>`;
        totalList += html;
        
    }
    document.querySelector('.js-todoList').innerHTML = totalList;
    };


    function addInput(){
        const inputData = document.querySelector('.js-input');
        const inputDate = document.querySelector('.js-dueDate');
        let name = inputData.value;
        let dueDate = inputDate.value;
        TodoList.push(
        {//name:name, 
        //dueDate:dueDate  
        name , dueDate});
        // inputData.value = '';
        // inputDate.value='';
        renderTodo();
        inputData.value = '';
        inputDate.value='';
       
        console.log(TodoList);
        
    };
    
    