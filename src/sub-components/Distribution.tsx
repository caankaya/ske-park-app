import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Distribution() {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-y-5 rounded-xl bg-secondary p-3 laptop:w-1/2">
      <p className="text-sm">Répartition des places</p>
      <div className="flex w-full justify-center gap-x-5">
        <div className="flex flex-col">
          <FontAwesomeIcon
            icon={"fa-solid fa-car-side" as IconProp}
            className="size-5 rounded-full bg-info p-2 text-secondary"
          />
          <span className="place-content-center text-center">45</span>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon
            icon={"fa-solid fa-motorcycle" as IconProp}
            className="size-5 rounded-full bg-info p-2 text-secondary"
          />
          <span className="place-content-center text-center">45</span>
        </div>
      </div>
    </div>
  );
}
