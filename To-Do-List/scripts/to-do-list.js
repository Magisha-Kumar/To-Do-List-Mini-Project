let todoList=JSON.parse(localStorage.getItem('todoList')) ||
[
    {
        name:'make dinner',
        dueDate:'2022-12-14'
    },
    {
        name:'wash dishes',
        dueDate:'2024-03-01'
    }
];

renderTodoList();

function renderTodoList(){

    let todoListHTML=[];

    todoList.forEach( (todoObject,index) => {
        const {name,dueDate}=todoObject;
        const html=`
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button class="delete-button js-delete-button">Delete</button>
        `;
        todoListHTML+=html;
    });

    localStorage.setItem('todoList',JSON.stringify(todoList))

    /*
    for(let i=0;i<todoList.length;i++)
    {
        const todoObject=todoList[i];
        const {name,dueDate}=todoObject;
        const html=`
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
        " class="delete-button js-delete-button">Delete</button>
        `;
        todoListHTML+=html;
    }    */

    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton,index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index,1);
                renderTodoList();
            })
        })
}

document.querySelector('.js-add-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;
    const dateInputElement=document.querySelector('.js-dueDate-input');
    const dueDate=dateInputElement.value;
    todoList.push(
        { name,
         dueDate}
        );
    inputElement.value='';
    dateInputElement.value='';
    renderTodoList();
}