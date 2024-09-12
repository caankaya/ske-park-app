import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import instance from "../../axios";
import { ISpot } from "../../@types/spot";
import { AxiosError } from "axios";
import { getAllVehicles } from "./vehicle";

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
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/spots/all");
      return data;
    } catch (error) {
      // Utilisation de l'opérateur optionnel pour éviter 'undefined'
      if ((error as AxiosError).response?.data) {
        return rejectWithValue((error as AxiosError).response?.data);
      }
      // Sinon, rejeter l'erreur générique
      return rejectWithValue((error as Error).message);
    }
  },
);

export const leaveSpot = createAsyncThunk(
  "The spot reducer/leaveSpot", // nom de l'action
  async (
    formData: {
      reference: string;
      spotNumber: number;
    },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const { data } = await instance.post("/ticket/delete", formData);
      // fermer la modal,
      dispatch(toggleLeaveSPotModal());
      dispatch(getAllSpots());
      dispatch(getAllVehicles());
      return data;
    } catch (error) {
      // Utilisation de l'opérateur optionnel pour éviter 'undefined'
      if ((error as AxiosError).response?.data) {
        return rejectWithValue((error as AxiosError).response?.data);
      }
      // Sinon, rejeter l'erreur générique
      return rejectWithValue((error as Error).message);
    }
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
