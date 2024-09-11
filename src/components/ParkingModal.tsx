export default function ParkingModal() {
  return (
    <dialog open={true} className="absolute z-20 h-screen w-full bg-primary/70">
      <div className="m-auto size-80 translate-y-1/2 bg-secondary p-5 shadow-xl rounded-xl">
        <p className="text-center uppercase mb-10">entrée de véhicule</p>
        <form className="mt-5 flex flex-col items-center gap-y-5 text-sm">
          <div className="relative flex w-full items-center">
            <label
              htmlFor="immatriculation"
              className={`absolute -top-2 ml-3 bg-secondary text-xs`}
            >
              Immatriculation
            </label>
            <input
              type="text"
              name="immatriculation"
              className="h-10 w-full rounded-md border border-primary text-sm pl-5"
              required
            />
          </div>
          <div className="relative flex w-full items-center">
            <label
              htmlFor="type"
              className={`absolute -top-2 ml-3 bg-secondary text-xs`}
            >
              Type de véhicule
            </label>
            <select
              className="h-10 w-full rounded-md border border-primary text-sm pl-4"
              name="type"
              required
            >
              <option value="" disabled hidden selected></option>
              <option value="Car">Automobile</option>
              <option value="Motor">Moto</option>
            </select>
          </div>
          <div className="relative flex w-full items-center">
            <label
              htmlFor="start_time"
              className={`absolute -top-2 ml-3 bg-secondary text-xs`}
            >
              Heure d'arrivée
            </label>
            <input
              type="time"
              className="h-10 w-full rounded-md border border-primary text-sm pl-5"
              min="08:00"
              max="18:00"
              name="start_time"
              required
            />
          </div>
          <button className="mb-5 h-8 w-1/2 rounded-lg bg-success text-sm text-secondary duration-300 hover:bg-infohover">
            Valider
          </button>
        </form>
      </div>
    </dialog>
  );
}
