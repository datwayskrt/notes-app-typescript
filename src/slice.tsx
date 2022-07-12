import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface Todo {
  text: string[];
  id: number;
}

const initialState: Todo = {
  text: [],
  id: 0
};

export const TodoList = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.text = [
        ...state.text,
        { text: action.payload, id: state.text.length }
      ];
    },
    del: (state, action: PayloadAction<number>) => {
      state.text = state.text.filter(({ id }) => id !== action.payload);
    }
  }
});

export const { add, del } = TodoList.actions;

export const selectTodo = (state: RootState) => state.TodoList;
export default TodoList.reducer;
