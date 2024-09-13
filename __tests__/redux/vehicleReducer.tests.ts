import { IVehicle } from "../../src/@types/vehicle";
import vehicleReducer, {
  getAllVehicles,
  VehicleState,
} from "../../src/redux/reducers/vehicle";

// Assure-toi d'importer le bon chemin
describe("vehicleReducer", () => {
  const initialState: VehicleState = {
    all: null,
  };

  it("should return the initial state", () => {
    const result = vehicleReducer(undefined, { type: "" });
    expect(result).toEqual(initialState);
  });

  it("should handle getAllVehicles.fulfilled", () => {
    const mockVehicles: IVehicle = {
      cars: [
        { immatriculation: "ABC-123-DE", type: "Car" },
        { immatriculation: "FGH-456-IJ", type: "Car" },
      ],
      motors: [{ immatriculation: "KLM-789-NO", type: "Motor" }],
    };
    const action = getAllVehicles.fulfilled(mockVehicles, "", undefined);
    const result = vehicleReducer(initialState, action);

    expect(result.all).toEqual(mockVehicles);
  });

  it("should handle getAllVehicles.rejected", () => {
    const action = getAllVehicles.rejected(
      new Error("Failed to fetch vehicles"),
      "",
      undefined,
    );
    const result = vehicleReducer(initialState, action);

    expect(result.all).toBeNull(); // L'état ne change pas si l'appel échoue
    // Si tu souhaites gérer l'état en cas d'erreur, tu pourrais ajuster ceci
  });
});
