const TodoList = [];

function renderTodo() {
  let totalList = '';
  for (let i = 0; i < TodoList.length; i++) {
    const todoObj = TodoList[i];
    const { name, dueDate, priority } = todoObj;

    const html = `
      <div class="todo-grid">
        <div><strong>Name:</strong> ${name}</div>
        <div><strong>Due Date:</strong> ${dueDate}</div>
        <div><strong>Priority:</strong> ${priority}</div>
        <button class="deltBtn" onclick="confirmDelete(${i})">Delete</button>
      </div>`;
    totalList += html;
  }
  document.querySelector('.js-todoList').innerHTML = totalList;
}

function confirmDelete(index) {
  const confirmation = confirm("Are you sure you want to delete this todo?");
  if (confirmation) {
    TodoList.splice(index, 1);
    renderTodo();
  }
}

function addInput() {
  const inputData = document.querySelector('.js-input');
  const inputDate = document.querySelector('.js-dueDate');
  const prioritySelect = document.querySelector('.js-priority'); // Get the selected priority

  let name = inputData.value;
  let dueDate = inputDate.value;
  let priority = prioritySelect.value;

  if (name === '' || dueDate === '' || priority === 'default') {
    alert('Enter a valid todo name, date, and select a priority.');
  } else {
    TodoList.push({
      name,
      dueDate,
      priority,
    });
    renderTodo();
    inputData.value = '';
    inputDate.value = '';
    prioritySelect.value = 'default'; // Reset the priority dropdown to the default value
  }
}
