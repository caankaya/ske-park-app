export interface IVehicle {
  cars: Car[];
  motors: Motor[];
}

export interface Car {
  id: number;
  immatriculation: string;
  type: string;
}

export interface Motor {
  id: number;
  immatriculation: string;
  type: string;
}
