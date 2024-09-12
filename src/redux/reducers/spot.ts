import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import instance from "../../axios";
import { ISpot } from "../../@types/spot";

interface SpotState {
  all: ISpot | null;
  modal: boolean;
}

const initialState: SpotState = {
  all: null,
  modal: false,
};

export const getAllSpots = createAsyncThunk(
  "Spot reducer/getAllSpots", // nom de l'action
  async () => {
    const { data } = await instance.get("/spots/all");
    return data;
  },
);

export const toggleModal = createAction("The modal entry vehicle toggles");

const spotReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllSpots.fulfilled, (state, action) => {
      state.all = action.payload;
    })
    .addCase(toggleModal, (state) => {
      state.modal = !state.modal;
    });
});

export default spotReducer;
