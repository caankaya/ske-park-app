import { ISpot } from "../@types/spot";

export default function Parking({ spots }: { spots: ISpot[] }) {
  return (
    <div className="flex w-full flex-col justify-between gap-y-5 laptop:w-1/2 desktop:flex-row desktop:flex-wrap">
      {spots &&
        spots.map((spot) => (
          <div
            key={spot.spot_id}
            className="flex w-full flex-col items-center gap-y-5 rounded-xl bg-secondary shadow-lg desktop:w-[32%]"
          >
            <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
              <p>{spot.spot_number}</p>
            </div>
            <div className="ml-5 self-start">
              <p className="text-sm">
                Numéro de ticket : <b>{spot.ticket_reference}</b>
              </p>
              <p className="text-sm">
                Heure d'arrivé : <b>{spot.start_time}</b>
              </p>
              <p className="text-sm">
                Numéro d'immatricule : <b>{spot.vehicle_immatriculation}</b>
              </p>
              <p className="text-sm">
                Type de véhicule : <b>{spot.vehicle_type as null}</b>
              </p>
            </div>
            <button className="mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300 hover:bg-infohover">
              Prendre un ticket
            </button>
          </div>
        ))}
    </div>
  );
}
