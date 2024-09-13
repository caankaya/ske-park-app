import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../redux/types";

export default function Distribution() {
  const vehicles = useAppSelector((state) => state.vehicles.all);
  console.log("vehicles :", vehicles);
  return (
    <div className="flex w-full flex-col items-center justify-start gap-y-5 rounded-xl bg-secondary p-3 shadow-lg laptop:w-1/2">
      <p className="text-sm">Répartition des places</p>
      <div className="flex w-full justify-center gap-x-5">
        <div className="flex flex-col">
          <FontAwesomeIcon
            icon={"fa-solid fa-car-side" as IconProp}
            className="size-5 rounded-full bg-info p-2 text-secondary"
          />
          {vehicles && (
            <span className="place-content-center text-center">
              {vehicles.cars.length ? vehicles.cars.length : 0}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon
            icon={"fa-solid fa-motorcycle" as IconProp}
            className="size-5 rounded-full bg-info p-2 text-secondary"
          />
          {vehicles && (
            <span className="place-content-center text-center">
              {vehicles.motors.length ? vehicles.motors.length : 0}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
