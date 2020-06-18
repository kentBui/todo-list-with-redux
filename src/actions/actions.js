// add todo item to list
export const addTodoList = (payload) => {
  return {
    type: "ADD_TODO",
    payload: payload,
  };
};

// edit item
export const editTodoItem = (payload) => {
  return {
    type: "EDIT_TODO",
    payload: payload,
  };
};

// delete item
export const deleteTodoItem = (payload) => {
  return {
    type: "DELETE_TODO",
    payload: payload,
  };
};

// open modal confirm delete
export const openModalDelete = (payload) => {
  return {
    type: "OPEN",
    payload: payload,
  };
};

// close modal comfirm delete
export const closeModalDelete = (payload) => {
  return {
    type: "CLOSE",
    payload: payload,
  };
};

//search
export const searchTodosList = (payload) => {
  return {
    type: "SEARCH",
    payload: payload,
  };
};

// sort list
export const sortBy = (payload) => {
  return {
    type: "SORT_BY",
    payload: payload,
  };
};
