import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  const [activeButton, setActiveButton] = useState<string>("CLOSE");
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-y-5 bg-base">
      {/* Dashboard */}
      <div className="flex w-full flex-col items-center gap-5 laptop:w-1/2 laptop:flex-row laptop:items-stretch">
        {/* Ouverture manuelle des barrières */}
        <div className="flex w-full flex-col items-center justify-center gap-x-5 gap-y-5 rounded-xl bg-secondary p-3 laptop:w-1/2">
          <p className="text-center text-sm">
            Ouverture manuelle des barrières
          </p>
          <div className="flex w-full justify-center gap-x-5">
            <button
              className={`hover:bg-succeshover size-10 rounded-full bg-success text-secondary duration-300 ${activeButton === "OPEN" && "scale-110 shadow-lg"}`}
              onClick={() => {
                setActiveButton("OPEN");
              }}
            ></button>
            <button
              className={`hover:bg-warninghover size-10 rounded-full bg-warning text-secondary duration-300 ${activeButton === "CLOSE" && "scale-110 shadow-lg"}`}
              onClick={() => {
                setActiveButton("CLOSE");
              }}
            ></button>
          </div>
          <p className="text-sm">
            Etat actuel :{" "}
            <span
              className={
                activeButton === "OPEN"
                  ? "font-bold text-success"
                  : "font-bold text-warning"
              }
            >
              {activeButton}
            </span>
          </p>
        </div>
        {/* Compteur du parking */}
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
        {/* Motors / Cars */}
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
      </div>
      {/* Parking */}
      <div className="flex w-full flex-col gap-y-5 justify-between laptop:w-1/2 desktop:flex-row desktop:flex-wrap">
        <div className="flex flex-col items-center w-full gap-y-5 desktop:w-[32%] rounded-xl bg-secondary shadow-lg">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex flex-col items-center w-full gap-y-5 desktop:w-[32%] rounded-xl bg-secondary shadow-lg">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex flex-col items-center w-full gap-y-5 desktop:w-[32%] rounded-xl bg-secondary shadow-lg">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex flex-col items-center w-full gap-y-5 desktop:w-[32%] rounded-xl bg-secondary shadow-lg">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex flex-col items-center w-full gap-y-5 desktop:w-[32%] rounded-xl bg-secondary shadow-lg">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex flex-col items-center w-full gap-y-5 desktop:w-[32%] rounded-xl bg-secondary shadow-lg">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>
      </div>
    </div>
  );
}
