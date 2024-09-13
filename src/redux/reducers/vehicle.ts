import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "../../axios";
import { IVehicle } from "../../@types/vehicle";

export interface VehicleState {
  all: IVehicle | null;
}

const initialState: VehicleState = {
  all: null,
};

export const getAllVehicles = createAsyncThunk<IVehicle>(
  "/getAllVehicles",
  async () => {
    try {
      const { data } = await axios.get("/vehicles/all");
      return data;
    } catch (error) {
      console.warn(error);
      throw new Error("Failed to fetch vehicles");
    }
  },
);

const vehicleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllVehicles.fulfilled, (state, action) => {
      state.all = action.payload;
    })
});

export default vehicleReducer;
