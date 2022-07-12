import { configureStore } from "@reduxjs/toolkit";
import TodoList from "./slice";

const store = configureStore({
  reducer: { todos: TodoList }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export default store;
