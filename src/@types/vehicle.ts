export interface IVehicle {
  cars: Car[];
  motors: Motor[];
}

export interface Car {
  immatriculation: string;
  type: string;
}

export interface Motor {
  immatriculation: string;
  type: string;
}
