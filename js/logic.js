const todoFunctions = {
    generateId: ( () => {
      let idCounter = 0;
      function incrementCounter() {
        return (idCounter += 1);
      }
      return incrementCounter;
    })(),

    cloneArrayOfObjects: (todos) => {
      return todos.map( (todo) => {
        return JSON.parse(JSON.stringify(todo));
      });
    },

    addTodo: (todos, newTodo) => {
      return todoFunctions.cloneArrayOfObjects(todos).concat(newTodo)
    },

    deleteTodo: (todos, idToDelete) => {
      return todoFunctions.cloneArrayOfObjects(todos).filter(e => e.id != idToDelete)
    },

    markTodo: (todos, idToMark) => {
        return todos.map(e => {
          return {
            id: e.id,
            description: e.description,
            done: (e.id === idToMark) ? true : e.done
          }
        })
    },
    
    sortTodos: (todos, sortFunction) => {
      // stretch goal! Do this last
      // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
      // sortFunction will have same signature as the sort function in array.sort
      // hint: array.slice, array.sort
    },
  };


  if (typeof module !== 'undefined') {
    module.exports = {
      todoFunctions
    }
  }
  