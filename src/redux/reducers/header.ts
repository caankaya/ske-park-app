import { createAction, createReducer } from "@reduxjs/toolkit";

interface HeaderState {
  burger: boolean;
  infoModal: boolean;
}

const initialState: HeaderState = {
  burger: false,
  infoModal: true,
};

export const toggleBurger = createAction<boolean>(
  "Toggle menu burger/Header reducer",
);

export const toggleInfoModal = createAction<boolean>(
  "Toogle info modal/Header reducer",
);

const headerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleBurger, (state) => {
      state.burger = !state.burger;
    })
    .addCase(toggleInfoModal, (state, action) => {
      state.infoModal = action.payload;
    });
});

export default headerReducer;
