import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import instance from "../../axios";
import { ISpot } from "../../@types/spot";

interface SpotState {
  all: ISpot | null;
  ticketModal: boolean;
  leaveSpotModal: boolean;
}

const initialState: SpotState = {
  all: null,
  ticketModal: false,
  leaveSpotModal: false,
};

export const getAllSpots = createAsyncThunk(
  "Spot reducer/getAllSpots", // nom de l'action
  async () => {
    const { data } = await instance.get("/spots/all");
    return data;
  },
);

export const toogleTicketModal = createAction(
  "The modal entry vehicle toggles",
);
export const toggleLeaveSPotModal = createAction(
  "The modal leave vehicle toggles",
);

const spotReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllSpots.fulfilled, (state, action) => {
      state.all = action.payload;
    })
    .addCase(toogleTicketModal, (state) => {
      state.ticketModal = !state.ticketModal;
    })
    .addCase(toggleLeaveSPotModal, (state) => {
      state.leaveSpotModal = !state.leaveSpotModal;
    });
});

export default spotReducer;
