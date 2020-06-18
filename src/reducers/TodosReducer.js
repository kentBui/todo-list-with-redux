const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    { id: "", task: "", level: null },
  ],
  deletedItem: {
    id: "",
    isDelete: false,
  },
  searchTerm: "",
  sort: { name: "name", value: 1, label: "Name ASC" },
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodos = [...state.todos];
      newTodos.push(action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    }

    case "EDIT_TODO": {
      const newTodos = [...state.todos];
      const item = action.payload;
      const index = newTodos.findIndex((todo) => todo.id === item.id);
      newTodos.splice(index, 1, item);
      return {
        ...state,
        todos: newTodos,
      };
    }

    case "DELETE_TODO": {
      const newTodos = [...state.todos];
      const tempTodos = newTodos.filter((item) => item.id !== action.payload);
      return {
        ...state,
        todos: tempTodos,
      };
    }

    case "OPEN": {
      return {
        ...state,
        deletedItem: action.payload,
      };
    }

    case "CLOSE": {
      return {
        ...state,
        deletedItem: action.payload,
      };
    }

    case "SEARCH": {
      const value = action.payload;

      return {
        ...state,
        searchTerm: value,
      };
    }

    case "SORT_BY": {
      const value = action.payload;

      return {
        ...state,
        sort: value,
      };
    }

    default:
      return state;
  }
};
export default TodosReducer;
