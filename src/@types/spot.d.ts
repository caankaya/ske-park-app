export interface ISpot {
  spot_id: number;
  spot_number: number;
  etat: boolean;
  ticket_reference: string | null;
  ticket_montant: number | null;
  start_time: string;
  vehicle_immatriculation: string | null;
  vehicle_type: IVehicle | null;
}

export interface IVehicle {
  vehicle_type: "Car" | "Motor";
}
