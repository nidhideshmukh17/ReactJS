import { createStore } from "redux";
import studReducer from "../reducer/studReducer";


const store=createStore(studReducer);

export default store;