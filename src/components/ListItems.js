import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";
import { editTodoItem, openModalDelete } from "../actions/actions";
import { Col } from "reactstrap";

function ListItems() {
  const todoList = useSelector((state) => state.todos);
  const searchTerm = useSelector((state) => state.searchTerm);
  const sort = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const saveItem = (item) => {
    const action = editTodoItem(item);
    dispatch(action);
  };

  const deleteItem = (id) => {
    console.log(id);
    const deletedItem = {
      id: id,
      isDelete: true,
    };
    const action = openModalDelete(deletedItem);
    dispatch(action);
  };

  let newTodoList = todoList.filter(
    (item) => item.task.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  if (sort.name === "name") {
    newTodoList = newTodoList.sort((a, b) => {
      if (a.task > b.task) {
        return sort.value;
      }
      if (a.task < b.task) {
        return -sort.value;
      }
      return 0;
    });
  } else {
    newTodoList = newTodoList.sort((a, b) => {
      if (a.level > b.level) {
        return sort.value;
      }
      if (a.level < b.level) {
        return -sort.value;
      }
      return 0;
    });
  }

  return (
    <Col sm={12} className="mt-3">
      <h3 className="text-capitalize">List Task</h3>
      <table className="table table-hover ">
        {/* header of table */}
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "200px" }}>Action</th>
            <th style={{ width: "50px" }}>Finish</th>
          </tr>
        </thead>
        {/* end header of table */}

        {/* render list todo item */}
        {newTodoList.map((item, index) => (
          <Item
            key={item.id}
            item={item}
            index={index}
            saveItem={saveItem}
            deleteItem={deleteItem}
          />
        ))}
        {/* end list todo item */}
      </table>
    </Col>
  );
}

// ListItems.propTypes = {};

export default ListItems;
