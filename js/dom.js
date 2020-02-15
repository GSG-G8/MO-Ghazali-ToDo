(function() {
  // This is the dom node where we will keep our todo
  const container = document.getElementById("todo-container");
  const addTodoForm = document.getElementById("add-todo");

  let state = [
    { id: -3, description: "first todo", done:false },
    { id: -2, description: "second todo",done:false },
    { id: -1, description: "third todo",done:true }
  ];

  // This function takes a todo, it returns the DOM node representing that todo
  const createTodoNode = todo => {
    const todoNode = document.createElement("li");
    const spanDescription = document.createElement("span");
    const deleteButtonNode = document.createElement("button");
    const markTodo = document.createElement("button");

    spanDescription.textContent = todo.description;
    spanDescription.classList.add("span-style");
    todoNode.appendChild(spanDescription);

    deleteButtonNode.classList.add("fa", "fa-times", "delete-button");
    deleteButtonNode.addEventListener("click", event => {
      const newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    markTodo.classList = "mark-button" + " fa " + "fa-" + (todo.done ? "check-" : "") + "square-o";
    markTodo.addEventListener("click", () => {
      const newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    todoNode.appendChild(markTodo);
    todoNode.appendChild(deleteButtonNode);

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", event => {
      const description = document.querySelector(".input-description");
      event.preventDefault();
      if (description.value !== '') {
        const todo = {
          id: todoFunctions.generateId(),
          description: description.value,
          done: false,
        };
        const newState = todoFunctions.addTodo(state, todo);
        update(newState);
      }
      
    });
  }

  // you should not need to change this function
  const update = newState => {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  const renderState = state => {
    const todoListNode = document.createElement("ul");
    state.forEach(todo => {
      todoListNode.appendChild(createTodoNode(todo));
    });
    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
