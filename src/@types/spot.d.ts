import { Car, Motor } from "./vehicle";

export interface ISpot {
  id: number;
  number: number;
  state: boolean;
  tickets: Ticket[];
}

export interface Ticket {
  id: number;
  reference: string;
  start_time: string;
  end_time: string;
  amount: number;
  id_spot: number;
  id_vehicle: number;
  vehicle: Car | Motor;
}
