import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import instance from "../../axios";
import { IVehicle } from "../../@types/spot";

interface VehicleState {
  all: IVehicle | null;
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
    state.all = action.payload;
  });
});

export default vehicleReducer;
