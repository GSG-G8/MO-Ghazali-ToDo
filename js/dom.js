// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById('todo-container');
  const addTodoForm = document.getElementById('add-todo');

  const state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  const createTodoNode = (todo) =>{
    const todoNode = document.createElement('li');
    const spanDescription = document.createElement('span');
    const deleteButtonNode = document.createElement('button');
    const markTodo = document.createElement('button');

    spanDescription.textContent = todo.description;
    todoNode.appendChild(spanDescription);
    deleteButtonNode.textContent = 'Delete';
    deleteButtonNode.addEventListener('click', (event) => {
      const newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    todoNode.appendChild(deleteButtonNode);
    markTodo.textContent = 'markTodo';
    markTodo.addEventListener('click', () => {
      const newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    }); 
    
    todoNode.appendChild(markTodo)
    // add classes for css
    return todoNode;
  };
  
  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', (event) => {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      const description = '?'; // event.target ....

      // hint: todoFunctions.addTodo
      const newState = []; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  const update = (newState) => {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  const renderState = (state) => {
    const todoListNode = document.createElement('ul');

    state.forEach( (todo) => {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
