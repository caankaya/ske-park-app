import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import instance from "../../axios";
import { ITicket } from "../../@types/ticket";
import { AxiosError } from "axios"; // Importer AxiosError
import { getAllSpots, toggleModal } from "./spot";
import { getAllVehicles } from "./vehicle";

interface TicketState {
  message: string | null;
}

const initialState: TicketState = {
  message: null,
};

export const getTicket = createAsyncThunk(
  "Ticket reducer/getTicket", // nom de l'action
  async (objData: ITicket, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await instance.post("/ticket/create", objData);
      // Dispatch d'autres actions après la création réussie
      // Fermeture de modal
      dispatch(toggleModal());
      // Récupère toutes les places parking
      dispatch(getAllSpots());
      // Récupère toutes les vehicules
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

export const clearMessage = createAction("The message api was deleted");

const ticketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTicket.rejected, (state, action) => {
      // Cast explicite du payload pour accéder aux propriétés
      state.message =
        (action.payload as { message: string }).message ||
        "Une erreur est survenue";
    })
    .addCase(clearMessage, (state) => {
      state.message = null;
    });
});

export default ticketReducer;
