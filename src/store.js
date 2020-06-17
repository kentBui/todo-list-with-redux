import { createStore } from "redux";
import TodosReducer from "./reducers/TodosReducer";

const store = createStore(TodosReducer);
export default store;
