import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import instance from "../../axios";
import { ISpot } from "../../@types/spot";

interface SpotState {
  all: ISpot | null;
}

const initialState: SpotState = {
  all: null,
};

export const getAllSpots = createAsyncThunk(
  "Spot reducer/getAllSpots", // nom de l'action
  async () => {
    const { data } = await instance.get("/spots/all");
    return data;
  },
);

const spotReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllSpots.fulfilled, (state, action) => {
    state.all = action.payload;
  });
});

export default spotReducer;
