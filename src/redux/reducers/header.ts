import { createAction, createReducer } from "@reduxjs/toolkit";

interface HeaderState {
  burger: boolean;
}

const initialState: HeaderState = {
  burger: false,
};

export const toggleBurger = createAction<boolean>("Toggle menu burger/Test reducer");

const headerReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleBurger, (state) => {
    state.burger = !state.burger;
  });
});

export default headerReducer;
