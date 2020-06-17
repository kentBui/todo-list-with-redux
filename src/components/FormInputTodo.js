import { FastField, Form, Formik } from "formik";
// import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, Col, FormGroup, Row } from "reactstrap";
import * as Yup from "yup";
import InputField from "../formField/InputField";
import SelectField from "../formField/SelectField";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodoList } from "../actions/actions";

function FormInputTodo() {
  const [isAddTask, setIsAddTask] = useState(false);
  const dispatch = useDispatch();

  // Change to add task mode
  const addTask = () => {
    setIsAddTask(true);
  };

  // cancer add task and change to normal mode
  const cancer = () => {
    setIsAddTask(false);
  };

  const handleSubmitForm = (values, resetForm) => {
    const newTodo = {
      ...values,
      id: uuidv4(),
    };
    // dispatch
    const action = addTodoList(newTodo);
    dispatch(action);
    //
    resetForm();
  };

  const initialValues = {
    task: "",
    level: 0,
  };

  const formSchema = Yup.object().shape({
    task: Yup.string().required("This field is required"),
    level: Yup.number().required("This field is required"),
  });

  function renderAddTask() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values, { resetForm }) =>
          handleSubmitForm(values, resetForm)
        }
      >
        {(props) => {
          return (
            <Form>
              {/* ADD TASK : START */}
              <FormGroup>
                <Button
                  color="info"
                  className="text-capitalize mb-3"
                  onClick={addTask}
                  disabled
                  block
                >
                  Please fill and click submit
                </Button>
              </FormGroup>

              {/* <!-- ADD TASK : END --> */}
              {/* FORM : START */}
              <Row>
                <Col lg={4}>
                  <FastField
                    name="task"
                    component={InputField}
                    //
                    type="text"
                    label="Add Task"
                    placeholder="Task Name"
                  />
                </Col>
                <Col lg={4}>
                  <FastField
                    name="level"
                    component={SelectField}
                    //
                    type="select"
                    label="Level"
                  />
                </Col>

                <Col sm={2}>
                  <FormGroup>
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </FormGroup>
                </Col>
                <Col sm={2}>
                  <FormGroup>
                    <Button type="button" color="secondary" onClick={cancer}>
                      Cancel
                    </Button>
                  </FormGroup>
                </Col>
              </Row>

              {/* <!-- FORM : END --> */}
            </Form>
          );
        }}
      </Formik>
    );
  }

  function renderNormal() {
    return (
      <Button
        block
        color="primary"
        className="text-capitalize"
        onClick={addTask}
      >
        Add Task
      </Button>
    );
  }

  return (
    <div className="col-12 col-lg-6">
      {isAddTask ? renderAddTask() : renderNormal()}
    </div>
  );
}

// FormInputTodo.propTypes = {};

export default FormInputTodo;
