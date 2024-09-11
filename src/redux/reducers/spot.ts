import { createAction, createReducer } from "@reduxjs/toolkit";

interface SpotState {
  spots: [] | null;
}

const initialState: SpotState = {
  spots: null,
};

export const testAction = createAction<string>("spot/test");

const spotReducer = createReducer(initialState, (builder) => {
  builder.addCase(testAction, (state, action) => {
    console.log("state :", state);
    console.log("action :", action);
  });
});

export default spotReducer;
