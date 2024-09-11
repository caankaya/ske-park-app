import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import instance from "../../axios";

interface VehicleState {
  all: [] | null;
}

const initialState: VehicleState = {
  all: null,
};

export const getAllVehicles = createAsyncThunk(
  "/getAllVehicles", // nom de l'action
  async () => {
    const { data } = await instance.get("/vehicles/all");
    return data;
  },
);

const vehicleReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllVehicles.fulfilled, (state, action) => {
    console.log("action :", action);
    console.log("state :", state);
  });
});

export default vehicleReducer;
