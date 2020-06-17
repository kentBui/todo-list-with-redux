import React from "react";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { closeModalDelete, deleteTodoItem } from "../actions/actions";
import { Button } from "reactstrap";

function ModalDelete() {
  const { isDelete, id } = useSelector((state) => state.deletedItem);
  const dispatch = useDispatch();

  const cancerDelete = () => {
    const action = closeModalDelete({ id: "", isDelete: false });
    dispatch(action);
  };

  const confirmDelete = () => {
    const actionDelete = deleteTodoItem(id);
    const actionClose = closeModalDelete({ id: "", isDelete: false });

    dispatch(actionDelete);
    dispatch(actionClose);
  };

  return (
    <>
      {isDelete ? (
        <div className={isDelete ? "modal active" : "modal"}>
          <div className="modal-delete">
            <h3 className="text-center my-3">Do you want to delete?</h3>
            <Button color="info" className="mr-2" onClick={confirmDelete}>
              Accept
            </Button>
            <Button color="secondary" className="ml-2" onClick={cancerDelete}>
              Cancel
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

// ModalDelete.propTypes = {};

export default ModalDelete;
