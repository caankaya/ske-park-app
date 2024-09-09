import { createAction, createReducer } from "@reduxjs/toolkit";

interface TestState {
  burger: boolean;
}

const initialState: TestState = {
  burger: false,
};

export const toggleBurger = createAction<boolean>("Toggle menu burger/Test reducer");

const testReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleBurger, (state) => {
    state.burger = !state.burger;
  });
});

export default testReducer;
