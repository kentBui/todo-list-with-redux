import React, { useState } from "react";
import PropTypes from "prop-types";
import { Data } from "../data/DataLevel";
import { Button, Input } from "reactstrap";

function Item({ item, index, saveItem, deleteItem }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  const [editItem, setEditItem] = useState({
    task: item.task,
    level: 0,
  });

  const { id, task, level } = item;

  // change to edit mode
  function changeToEdit() {
    setIsEdit(true);
  }

  // get todo item after edit
  const handleChangeEdit = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setEditItem({ ...editItem, [key]: value });
  };

  // cancer edit
  const cancerEdit = () => {
    setIsEdit(false);
  };

  // send todo item to List item after edit
  const saveEdit = () => {
    let tempItem = { ...editItem, id: id };
    saveItem(tempItem);
    setIsEdit(false);
  };
  // check finish item
  const onFinishChange = (e) => {
    const value = e.target.checked;
    setIsFinish(value);
  };

  function renderEdit() {
    return (
      <tbody>
        <tr>
          <td className="text-center">{index + 1}</td>

          <td>
            <Input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="task"
              value={editItem.task}
              required
              onChange={handleChangeEdit}
            />
          </td>

          <td>
            <Input
              type="select"
              name="level"
              className="form-control"
              onChange={handleChangeEdit}
            >
              <option value="0">Small</option>
              <option value="1">Medium</option>
              <option value="2">High</option>
            </Input>
          </td>

          <td>
            <Button type="button" color="primary" onClick={saveEdit}>
              Save
            </Button>
            <Button
              className="ml-2"
              type="button"
              color="secondary"
              onClick={cancerEdit}
            >
              Cancer
            </Button>
          </td>
        </tr>
      </tbody>
    );
  }

  function renderNormal() {
    return (
      <tbody>
        <tr>
          <td className="text-center">{index + 1}</td>
          <td className={isFinish ? "text-muted" : ""}>{task}</td>
          <td className="text-center">
            <span className={level ? `badge ${Data[level].className}` : ""}>
              {Data[level].level}
            </span>
          </td>
          <td>
            <Button
              type="button"
              color="warning"
              onClick={changeToEdit}
              disabled={isFinish}
            >
              Edit
            </Button>
            <Button
              className="ml-2"
              type="button"
              color="danger"
              onClick={() => deleteItem(id)}
            >
              Delete
            </Button>
          </td>
          <td className="text-center">
            <Input
              type="checkbox"
              name="check"
              value={isFinish}
              onChange={onFinishChange}
            />
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <React.Fragment>{isEdit ? renderEdit() : renderNormal()}</React.Fragment>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
};

export default Item;
