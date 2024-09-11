import { Motor } from "./vehicle";

export interface ISpot {
  spots: Spot[];
  total: number;
  available: number;
  busy: number;
  busyPercentage: string;
}

export interface Spot {
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
  amount: string;
  id_spot: number;
  id_vehicle: number;
  vehicle: Car | Motor;
}
