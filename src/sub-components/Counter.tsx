import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Counter() {
  return (
    <div className="flex w-full items-center justify-center gap-x-5 rounded-xl bg-secondary p-3 max-laptop:py-5 laptop:w-1/2">
      {/* Barre de progression circulaire */}
      <div className="size-20">
        <CircularProgressbar
          value={68}
          maxValue={100}
          text={`${68}%`}
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
        <p className="text-xs text-success">32 places sont disponibles</p>
        <p className="text-xs text-warning">68 places sont utilisées</p>
      </div>
    </div>
  );
}