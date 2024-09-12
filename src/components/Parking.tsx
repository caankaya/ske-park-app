import { useState } from "react";
import { Spot } from "../@types/spot";
import ParkingModal from "./ParkingModal";
import { useAppDispatch } from "../redux/types";
import { toggleModal } from "../redux/reducers/spot";

export default function Parking({ spots }: { spots: Spot[] }) {
  const dispatch = useAppDispatch();
  const [spotNumber, setSpotNumber] = useState<number | null>(null);

  return (
    <div className="relative flex w-full flex-col justify-between gap-y-5 laptop:w-1/2 desktop:flex-row desktop:flex-wrap">
      {spots &&
        spots.map((spot: Spot) => {
          const ticket = spot.tickets[0];
          const date = new Date(ticket?.start_time)
            .toTimeString()
            .split(" ")[0];
          const [hours, minutes] = date.split(":");

          return (
            <div
              key={spot.number}
              className="flex w-full flex-col items-center gap-y-5 rounded-xl bg-secondary shadow-lg desktop:w-[32%]"
            >
              <div
                className={`flex h-12 w-full items-center justify-center rounded-t-xl ${spot.state ? "bg-success" : "bg-error"}`}
              >
                <p>{spot.number}</p>
              </div>
              <div className="ml-5 self-start">
                <p className="text-sm">
                  Numéro de ticket : <b>{ticket?.reference}</b>
                </p>
                {
                  <p className="text-sm">
                    Heure d'arrivée :{" "}
                    {ticket && (
                      <b>
                        {hours}h{minutes}
                      </b>
                    )}
                  </p>
                }
                <p className="text-sm">
                  Numéro d'immatriculation :{" "}
                  <b>{ticket?.vehicle.immatriculation}</b>
                </p>
                <p className="text-sm">
                  Type de véhicule :{" "}
                  {ticket?.vehicle.type && (
                    <b>
                      {ticket?.vehicle.type === "Car" ? "Automobile" : "Moto"}
                    </b>
                  )}
                </p>
              </div>
              {spot.state ? (
                <button
                  className="mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300 hover:bg-infohover"
                  onClick={() => {
                    setSpotNumber(spot.number);
                    dispatch(toggleModal());
                  }}
                >
                  Prendre un ticket
                </button>
              ) : (
                <button className="mb-5 h-8 w-1/2 rounded-lg bg-warning text-sm text-secondary duration-300 hover:bg-warninghover">
                  Libérer la place
                </button>
              )}
            </div>
          );
        })}
      <ParkingModal number={spotNumber as number} />
    </div>
  );
}
