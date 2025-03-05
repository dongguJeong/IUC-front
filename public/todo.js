const TODO_CONTAINTER = document.querySelector('.main_todo_container');
const TODO_LIST = document.querySelector('.main_todo_list');
const TODO_FORM = document.querySelector('.main_todo_form');


const createTodo = (value) => {
   const li = document.createElement('li');
   li.innerText = value;
   const CLASS_NAME = Date.now().toString();
   li.className = CLASS_NAME;
   TODO_LIST.appendChild(li);
   const button = document.createElement('button');
   button.innerText = 'X';
   button.addEventListener('click', deleteTodo);
   li.appendChild(button);

   let todos = localStorage.getItem('todos');
   const todo = ({text: value, className: CLASS_NAME});
   console.log(todos);

//    if(todos){
//     todos.push(todo);
//     localStorage.setItem('todos',JSON.stringify(todos));
//    }
//    else{
//     localStorage.setItem('todos',JSON.stringify(todo));
//    }
  
   TODO_LIST.append(li);


}

TODO_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const INPUT = document.querySelector('.main_todo_input');
    const VALUE = INPUT.value;

    if (!VALUE) {
        return;
    }

    createTodo(VALUE);

    INPUT.value = '';
});

const render = () => {
    TODO_LIST.innerHTML = ''; // 기존 리스트를 비웁니다.
    const todos = localStorage.getItem('todos');
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.innerText = todo.text;
        li.className = todo.className;
        TODO_LIST.appendChild(li);
        const button = document.createElement('button');
        button.innerText = 'X';
        button.addEventListener('click', deleteTodo);
        li.appendChild(button);
        TODO_LIST.append(li);
    });
};

const deleteTodo = (e) => {
    const TARGET = e.target.parentNode.className;
    let todos = localStorage.getItem('todos');
    todos = todos.filter((todo) => todo.className !== TARGET);
    localStorage.setItem('todos',JSON.stringify(todos));

    render();
};