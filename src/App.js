import React from "react";
import "./App.css";
import FormInputTodo from "./components/FormInputTodo";
import Header from "./components/Header";
import ListItems from "./components/ListItems";
import ModalDelete from "./components/ModalDelete";
import SortAndSearch from "./components/SortAndSearch";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <SortAndSearch />
          <FormInputTodo />
          <ListItems />
        </div>
      </div>
      <ModalDelete />
    </>
  );
}
