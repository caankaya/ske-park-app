import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useAppSelector } from "../redux/types";

export default function Counter() {
  const available = useAppSelector((state) => state.spots?.all?.available) || 0;
  const busy = useAppSelector((state) => state.spots?.all?.busy) || 0;
  const busyPercentage =
    useAppSelector((state) => state.spots?.all?.busyPercentage) || "0";

  return (
    <div className="flex w-full items-center justify-center gap-x-5 rounded-xl bg-secondary p-3 shadow-lg max-laptop:py-5 laptop:w-1/2">
      {/* Barre de progression circulaire */}
      <div className="size-20">
        <CircularProgressbar
          value={Number(busyPercentage)} // Convertir en nombre
          maxValue={100}
          text={`${busyPercentage}%`}
          styles={buildStyles({
            pathColor: "#000",
            textColor: "#000",
            trailColor: "#f7f7f7",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      {/* Les informations utiles */}
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <FontAwesomeIcon
            icon={"fa-brands fa-product-hunt" as IconProp}
            size="xl"
            className="mr-2 text-info"
          />
          Etat actuel
        </p>
        <p className="text-xs text-success">
          {available <= 1
            ? available + " place disponible"
            : available + " places disponibles"}
        </p>
        <p className="text-xs text-warning">
          {busy <= 1
            ? busy + " place occupée"
            : busy + " places occupées"}
        </p>
      </div>
    </div>
  );
}
