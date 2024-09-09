import { createAction, createReducer } from "@reduxjs/toolkit";

interface TestState {
  test: string | null;
}

const initialState: TestState = {
  test: null,
};

export const testAction = createAction<string>("test/test");

const testReducer = createReducer(initialState, (builder) => {
  builder.addCase(testAction, (state, action) => {
    state.test = "test";
    console.log("action :", action);
  });
});

export default testReducer;
