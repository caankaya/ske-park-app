import { ISpot } from "../@types/spot";

export default function Parking({ spots }: { spots: ISpot[] }) {
  return (
    <div className="flex w-full flex-col justify-between gap-y-5 laptop:w-1/2 desktop:flex-row desktop:flex-wrap">
      {spots &&
        spots.map((spot) => (
          <div
            key={spot.id}
            className="flex w-full flex-col items-center gap-y-5 rounded-xl bg-secondary shadow-lg desktop:w-[32%]"
          >
            <div
              className={`flex h-12 w-full items-center justify-center rounded-t-xl ${spot.state ? "bg-success" : "bg-error"}`}
            >
              <p>{spot.number}</p>
            </div>
            <div className="ml-5 self-start">
              <p className="text-sm">
                Numéro de ticket : <b>{spot.tickets[0]?.reference}</b>
              </p>
              <p className="text-sm">
                Heure d'arrivé :{" "}
                <b>{spot.tickets[0]?.start_time.split("T")[1].split('.000')[0]}</b>
              </p>
              <p className="text-sm">
                Numéro d'immatricule :{" "}
                <b>{spot.tickets[0]?.vehicle.immatriculation}</b>
              </p>
              <p className="text-sm">
                Type de véhicule :{" "}
                <b>
                  {spot.tickets[0]?.vehicle.type === "Car"
                    ? "Automobile"
                    : "Moto"}
                </b>
              </p>
            </div>
            {spot.state ? (
              <button className="mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300 hover:bg-infohover">
                Prendre un ticket
              </button>
            ) : (
              <button className="mb-5 h-8 w-1/2 rounded-lg bg-warning text-sm text-secondary duration-300 hover:bg-warninghover">
                Libérer la place
              </button>
            )}
          </div>
        ))}
    </div>
  );
}
