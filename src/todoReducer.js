const initialTodoState = {
  todos: []
};

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: todo
  }
}

const removeTodo = (key) => {
  return {
    type: REMOVE_TODO,
    key: key
  }
}

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.todo]
      };
    case REMOVE_TODO:
      return {
        todos: [...state.todos.slice(0, action.key), ...state.todos.slice(action.key + 1)]
      }
    default:
      return state;
  }
};

export const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (key) => dispatch(removeTodo(key)),
  };
};
